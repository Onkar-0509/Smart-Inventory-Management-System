---
collection: "examples"
source: "query_examples.md"
type: "examples"
---
# User Query → Intent → MongoDB Examples

"Show low stock products"
→ Intent: low_stock
→ Query: { owner: "{owner}", quantity: { $lte: "$reorderLevel" } }

"Get bill B001"
→ Intent: get_bill  
→ Query: { owner: "{owner}", billNumber: "B001" }

"Customer John bills"
→ Intent: customer_bills
→ Query: { owner: "{owner}", customerName: "John" }
