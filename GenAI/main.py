import asyncio
from graph.inventory_graph import create_inventory_graph
from dotenv import load_dotenv

load_dotenv()

async def chat():
    """Main chat loop for inventory bot"""
    graph = create_inventory_graph("dailyneeds@gmail.com")  # Default owner_id
    
    print("🤖 Inventory Bot Ready! (Type 'quit' to exit)")
    
    while True:
        try:
            query = input("\nYou: ").strip()
            if query.lower() in ['quit', 'exit', 'bye']:
                print("Bot: Goodbye! 👋")
                break
            
            # Invoke graph (sync for simple console)
            result = graph.invoke({
                "query": query, 
                "owner_id": "dailyneeds@gmail.com"
            })
            
            # ✅ Clean content extraction
            bot_response = result['response']
            if hasattr(bot_response, 'content'):
                print(f"Bot: {bot_response.content}")
            else:
                print(f"Bot: {str(bot_response)}")
                
        except KeyboardInterrupt:
            print("\nBot: Goodbye! 👋")
            break
        except Exception as e:
            print(f"Bot: Sorry, something went wrong: {str(e)}")

if __name__ == "__main__":
    asyncio.run(chat())
