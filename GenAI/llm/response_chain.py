from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate
from typing import Dict, Any, List

def create_response_chain():
    llm = ChatOllama(model="mistral")
    
    prompt = ChatPromptTemplate.from_template("""
    You are a helpful inventory assistant.

    QUERY: {query}
    DB RESULTS: {db_results} 
    RAG: {rag_context}

    STRICT RULES - NO EXCEPTIONS:
    1. ONLY use exact data from DB RESULTS above
    2. NO invented data, examples, or fake tables  
    3. Empty DB = "No inventory data available."
    4. Greetings = simple reply like "Hi! Ask about stock/bills."
    5. ONLY real numbers from DB

    Short direct response:
    """)
    
    # ✅ Proper Runnable chain
    chain = prompt | llm
    return chain

