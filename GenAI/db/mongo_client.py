# genai/db/mongo_client.py
import pymongo
from pymongo.errors import ConnectionFailure, PyMongoError
import os
from dotenv import load_dotenv
from typing import Optional

load_dotenv()


class MongoClient:
    def __init__(self):
        self.connection_string = os.getenv(
            "MONGO_URI",
            "mongodb+srv://shingadesuraj59:SurajShingade@easyserve.mqbs8xc.mongodb.net/inventry"
        )
        self.client: Optional[pymongo.MongoClient] = None
        self.db: Optional[pymongo.database.Database] = None

    def connect(self) -> bool:
        """Connect to MongoDB"""
        try:
            self.client = pymongo.MongoClient(self.connection_string)
            self.client.admin.command("ping")
            self.db = self.client["inventry"]  # your DB name
            print("✅ MongoDB connected")
            return True
        except ConnectionFailure:
            print("❌ MongoDB connection failed")
            self.client = None
            self.db = None
            return False

    def get_collection(self, name: str):
        """Safe collection getter"""
        if self.db is None:      # important: explicit None check (PyMongo 4)
            self.connect()
        return self.db[name]

    def close(self):
        if self.client:
            self.client.close()


# Singleton instance
mongo_client = MongoClient()
