from reteriver import create_retriever

def test():
    query = "What fields are present in the Product collection?"
    retriever = create_retriever()
    
    # Get all docs, then filter by collection
    docs = retriever.invoke(query)
    product_docs = [doc for doc in docs if doc.metadata.get('collection') == 'product']
    
    print("=" * 80)
    print("QUERY:", query)
    print(f"Found {len(product_docs)} product docs")
    print("=" * 80)
    
    for i, doc in enumerate(product_docs, 1):
        print(f"\n[Product {i}] {doc.page_content[:300]}...")

if __name__ == "__main__":
    test()
