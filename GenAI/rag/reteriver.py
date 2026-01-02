from langchain_chroma import Chroma  # ✅ Correct import
from langchain_ollama import OllamaEmbeddings
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

def get_embeddings():
    """Inline - no circular import"""
    return OllamaEmbeddings(model="nomic-embed-text")

def create_retriever():
    """Self-contained retriever"""
    embeddings = get_embeddings()
    vectorstore = Chroma(
        persist_directory="./chroma_db",
        embedding_function=embeddings
    )
    retriever = vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 6}
    )
    return retriever

def get_collection_retriever(retriever, collection_filter=None):
    """Filter by collection metadata"""
    def filter_docs(docs):
        if collection_filter:
            return [doc for doc in docs if doc.metadata.get('collection') == collection_filter]
        return docs
    
    chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | StrOutputParser()
    )
    return chain

