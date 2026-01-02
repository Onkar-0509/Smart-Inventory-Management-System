---
collection: "relationships"
source: "relationships.md"
type: "relationships"
---

Logical Relationships:
1. Product.supplier → Supplier.supplierName
2. Bill.customerId → Customer
3. Bill.items.productName → Product.name
4. All collections belong to User via owner field

Notes:
- No MongoDB joins
- Relationships are resolved logically


## Aggregation Examples
Customer Total Sales:
db.bill.aggregate([
  { $match: { owner: "{owner}", customerName: "{name}" } },
  { $group: { _id: "$customerName", total: { $sum: "$grandTotal" } } }
])

