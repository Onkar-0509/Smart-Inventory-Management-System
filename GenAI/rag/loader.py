import os
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

def load_documents():
    """Load all .md files from documents/ with metadata"""
    # FIXED: Use absolute path from rag folder
    docs_path = os.path.join(os.path.dirname(__file__), 'documents')
    
    loader = DirectoryLoader(
        docs_path,
        glob="**/*.md",
        loader_cls=UnstructuredMarkdownLoader,
        show_progress=True
    )
    
    docs = loader.load()
    
    # Add metadata from filename
    for doc in docs:
        source_path = doc.metadata.get('source', 'unknown.md')
        collection = os.path.basename(source_path).split('.')[0]
        doc.metadata.update({
            'collection': collection,
            'source': source_path,
            'type': doc.metadata.get('type', 'schema')
        })
    
    # Split documents
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    splits = text_splitter.split_documents(docs)
    
    return splits

if __name__ == "__main__":
    docs = load_documents()
    print(f"Loaded {len(docs)} document chunks")
