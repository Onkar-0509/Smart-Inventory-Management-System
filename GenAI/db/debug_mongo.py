# genai/db/debug_mongo.py
from db.mongo_client import mongo_client

if __name__ == "__main__":
    # 1. Connect
    ok = mongo_client.connect()
    if not ok:
        print("Connection failed")
        raise SystemExit(1)

    # 2. Show DB name
    print("DB:", mongo_client.db.name)

    # 3. List collections
    print("Collections:", mongo_client.db.list_collection_names())

    # 4. Use correct collection name: 'products'
    product_col = mongo_client.get_collection("products")

    # 5. Fetch ALL documents in collection
    print("\nAll documents in products:")
    for doc in product_col.find({}):
        print(doc)

    # 6. Fetch all products for specific owner
    owner_email = "dailyneeds@gmail.com"
    print(f"\nAll products for owner = {owner_email}:")
    for doc in product_col.find({"owner": owner_email}):
        print(doc)
