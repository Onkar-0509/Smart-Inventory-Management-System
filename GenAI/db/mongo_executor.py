# genai/db/mongo_executor.py
from typing import Any, Dict, List
from db.mongo_client import mongo_client


class MongoExecutor:
    def __init__(self) -> None:
        # Use actual collection names from the DB
        self.sanitized_collections = {
            "products",
            "customers",
            "users",
            "bills",
            "suppliers",
        }

    def execute_single(
        self,
        collection: str,
        query: Dict[str, Any],
        owner: str,
    ) -> List[Dict[str, Any]]:
        """
        Run a safe find() on a single collection, scoped by owner.
        """
        if collection not in self.sanitized_collections:
            return [{"error": f"Invalid collection: {collection}"}]

        # Ensure connection
        mongo_client.connect()

        # Merge query + owner
        safe_query: Dict[str, Any] = dict(query)
        if owner:
            safe_query["owner"] = owner

        print("DEBUG QUERY:", collection, safe_query)

        coll = mongo_client.get_collection(collection)
        cursor = coll.find(safe_query)

        results: List[Dict[str, Any]] = []
        for doc in cursor:
            doc["_id"] = str(doc["_id"])
            results.append(doc)

        return results


if __name__ == "__main__":
    executor = MongoExecutor()

    owner_email = "dailyneeds@gmail.com"

    # 1) Maida for this owner
    maida = executor.execute_single(
        "products",
        {"name": "Maida"},
        owner_email,
    )
    print(f"Maida products for owner: {len(maida)}")
    print(maida)

    # 2) All products for this owner (optional extra test)
    all_for_owner = executor.execute_single(
        "products",
        {},
        owner_email,
    )
    print(f"All products for owner: {len(all_for_owner)}")
    print(all_for_owner)
