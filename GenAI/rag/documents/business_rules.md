---
collection: "rules"
source: "business_rules.md"
type: "guidelines"
---

Rules:
1. Always apply owner filter on Product, Customer, Supplier, Bill
2. Low stock: Product.quantity < Product.reorderLevel
3. Expired products: expirationDate < today
4. Inventory value = quantity * sellingPrice
5. Supplier pending payment = totalPayment - depositAmount
6. Do not expose passwords or internal MongoDB fields
7. If query is conversational, do not query database
8. If required data is missing, respond politely


## MongoDB Query Templates
Low Stock: { owner: "{owner}", quantity: { $lte: "$reorderLevel" } }
Recent Bills: { owner: "{owner}", date: { $gte: new Date(Date.now() - 7*24*60*60*1000) } }
Customer Bills: { owner: "{owner}", customerName: "{customerName}" }

## Intent Classification
- "show low stock" → product, low stock query
- "today's sales" → bill, date filter  
- "supplier payment" → supplier, balance calc

