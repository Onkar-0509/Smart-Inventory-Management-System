from typing import Literal, Dict
from state.inventory_state import InventoryState

def router_node(state: InventoryState) -> Dict[str, Literal["planner", "respond_directly"]]:
    # Simple keyword routing (no LLM needed)
    query_lower = state["query"].lower()
    
    db_keywords = ["stock", "bill", "customer", "supplier", "product", "low", "rate", "price"]
    
    if any(word in query_lower for word in db_keywords):
        return {"next": "planner"}
    return {"next": "respond_directly"}
