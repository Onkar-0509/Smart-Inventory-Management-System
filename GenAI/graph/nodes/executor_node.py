from db.mongo_executor import MongoExecutor
from state.inventory_state import InventoryState


def executor_node(state: InventoryState) -> InventoryState:
    mongo = MongoExecutor()
    results = {}

    for intent in state["plan"]:
        collection = intent["collection"]
        query = intent["query"]
        db_result = mongo.execute_single(collection, query, state["owner_id"])
        results.setdefault(collection, []).extend(db_result)

    return {"db_results": results}
