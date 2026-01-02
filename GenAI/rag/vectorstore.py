from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings

def get_embeddings():
    return OllamaEmbeddings(model="nomic-embed-text")

def load_vectorstore(embeddings):
    return Chroma(
        persist_directory="./chroma_db",
        embedding_function=embeddings
    )

def create_vectorstore(docs, embeddings):
    vectorstore = Chroma.from_documents(
        documents=docs,
        embedding=embeddings,
        persist_directory="./chroma_db"
    )
    return vectorstore
