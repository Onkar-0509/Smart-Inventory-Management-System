from loader import load_documents
from embeddings import get_embeddings
from vectorstore import create_vectorstore
from reteriver import create_retriever

if __name__ == "__main__":
    print("🔄 Loading documents...")
    docs = load_documents()
    print(f"✅ Loaded {len(docs)} chunks")
    
    print("🔄 Creating embeddings...")
    embeddings = get_embeddings()
    
    print("🔄 Building vector store...")
    create_vectorstore(docs, embeddings)
    
    print("🧪 Testing retrieval...")
    retriever = create_retriever()  # ✅ No args
    test_query = "what is the price"
    results = retriever.invoke(test_query)
    
    print("📋 Retrieved docs:")
    for i, doc in enumerate(results):
        coll = doc.metadata.get('collection', 'unknown')
        print(f"{i+1}. [{coll}] {doc.page_content[:80]}...")
    
    print("✅ RAG pipeline ready!")

