from typing import List, Dict, Any
from pydantic import BaseModel, Field
from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser


class Intent(BaseModel):
    intent: str = Field(description="e.g. low_stock, get_bill, get_product_price")
    collection: str = Field(description="MongoDB collection: products, bills, customers, suppliers")
    query: Dict[str, Any] = Field(description="MongoDB filter object")


class Plan(BaseModel):
    intents: List[Intent]


def create_planner_chain(owner_id: str):
    llm = ChatOllama(model="mistral", temperature=0)

    parser = PydanticOutputParser(pydantic_object=Plan)

    prompt = ChatPromptTemplate.from_template(
        """
You are an inventory planning assistant.
Your job: Convert USER QUERY into one or more MongoDB intents.

ALWAYS return JSON with this shape:

{{
  "intents": [
    {{
      "intent": "<string>",
      "collection": "<products|bills|customers|suppliers>",
      "query": {{ ... MongoDB filter ... }}
    }},
    ...
  ]
}}

Rules:
- Do NOT return a single object. Always wrap in "intents": [ ... ].
- Always include "owner": "{owner_id}" inside every query.
- Use only these collections: "product", "bill", "customer", "supplier".
- If there is just one thing to do → still return an array with 1 item.

Examples:

User: "show low stock products"
Return:
{{
  "intents": [
    {{
      "intent": "low_stock",
      "collection": "products",
      "query": {{
        "owner": "{owner_id}",
        "quantity": {{ "$lte": "$reorderLevel" }}
      }}
    }}
  ]
}}

User: "show low stock products and today's bills"
Return:
{{
  "intents": [
    {{
      "intent": "low_stock",
      "collection": "products",
      "query": {{
        "owner": "{owner_id}",
        "quantity": {{ "$lte": "$reorderLevel" }}
      }}
    }},
    {{
      "intent": "today_bills",
      "collection": "bills",
      "query": {{
        "owner": "{owner_id}",
        "date": {{
          "$gte": "TODAY_START",
          "$lte": "TODAY_END"
        }}
      }}
    }}
  ]
}}

User: "price of Maida from my products"
Return:
{{
  "intents": [
    {{
      "intent": "get_product_price",
      "collection": "products",
      "query": {{
        "owner": "{owner_id}",
        "name": "Maida"
      }}
    }}
  ]
}}

Now respond for this QUERY:

OWNER: {owner_id}
QUERY: {query}

Return ONLY valid JSON matching the Plan schema above.
"""
    )

    chain = prompt | llm | parser
    return chain
