from llm.planner_chain import create_planner_chain
from state.inventory_state import InventoryState

def planner_node(state: InventoryState) -> InventoryState:
    planner = create_planner_chain(state["owner_id"])
    
    plan = planner.invoke({
        "owner_id": state["owner_id"],   # ✅ add this
        "query": state["query"]          # ✅ keep this
    })

    intents_list = [intent.model_dump() for intent in plan.intents]
    return {"plan": intents_list}



