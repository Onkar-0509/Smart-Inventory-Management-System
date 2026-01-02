import os
from dotenv import load_dotenv

load_dotenv()

# LLM
OLLAMA_BASE_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
LLM_MODEL = os.getenv("LLM_MODEL", "mistral")
EMBED_MODEL = os.getenv("EMBED_MODEL", "nomic-embed-text")

# MongoDB
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://shingadesuraj59:SurajShingade@easyserve.mqbs8xc.mongodb.net/inventry")
DB_NAME = "inventry"

# RAG
CHROMA_PATH = "./chroma_db"
CHUNK_SIZE = 800
CHUNK_OVERLAP = 100

# Owner (for testing)
DEFAULT_OWNER = "dailyneeds@gmail.com"
