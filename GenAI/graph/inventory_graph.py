from langgraph.graph import StateGraph, END
from state.inventory_state import InventoryState
from graph.nodes.router_node import router_node
from graph.nodes.planner_node import planner_node
from graph.nodes.executor_node import executor_node
from graph.nodes.response_node import response_node

def create_inventory_graph(owner_id: str):
    workflow = StateGraph(InventoryState)
    
    workflow.add_node("router", router_node)
    workflow.add_node("planner", planner_node)
    workflow.add_node("executor", executor_node)
    workflow.add_node("response", response_node)
    
    workflow.set_entry_point("router")
    workflow.add_conditional_edges(
        "router",
        lambda s: s.get("next", "planner"),
        {"planner": "planner", "respond_directly": "response"}
    )
    workflow.add_edge("planner", "executor")
    workflow.add_edge("executor", "response")
    workflow.add_edge("response", END)
    
    # ✅ FIXED: No checkpointer = simple invoke
    return workflow.compile()
