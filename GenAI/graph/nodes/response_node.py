from typing import Dict
from state.inventory_state import InventoryState
from llm.response_chain import create_response_chain

def response_node(state: InventoryState) -> Dict:
    chain = create_response_chain()
    
    # Safe dict access
    db_results = str(state.get("db_results", {}))
    rag_context = "\n".join([str(doc) for doc in state.get("rag_context", [])])
    
    response = chain.invoke({
        "query": state["query"],
        "db_results": db_results,
        "rag_context": rag_context
    })
    
    return {"response": str(response)}
