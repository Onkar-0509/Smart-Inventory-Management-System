---
collection: "supplier"
source: "supplier.md"
type: "schema"
---

Purpose:
Stores supplier payment and identity details.

Fields:
- owner (String): User ID
- supplierName (String)
- totalPayment (String)
- depositAmount (String)
- Date (String)
- imageUrl (String)
- createdAt (Date)
- updatedAt (Date)

Rules:
- Always filter by owner
- Pending payment = totalPayment - depositAmount
