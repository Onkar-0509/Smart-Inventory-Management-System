from typing import TypedDict, List, Dict, Any
from langgraph.graph.message import add_messages

class InventoryState(TypedDict):
    messages: List[Any]
    query: str                       # User input
    owner_id: str                    # Current user
    rag_context: List[str]           # Retrieved docs
    plan: List[Dict[str, Any]]       # [{"intent": "low_stock", "collection": "product", "query": {...}}]
    db_results: Dict[str, List]      # {"product": [docs...]}
    response: str                    # Final answer
