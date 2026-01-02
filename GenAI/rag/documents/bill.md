---
collection: "bill"
source: "bill.md"
type: "schema"
---

Purpose:
Stores completed sales transactions.

Fields:
- owner (String): User ID
- customerName (String)
- billNumber (String, unique)
- date (Date)
- phoneNumber (String)
- deposit (Number)
- customerId (String)
- items (Array):
  - productName (String)
  - quantity (Number)
  - price (Number)
  - total (Number)
- grandTotal (Number)
- netQuantity (Number)
- history (Array):
  - date (Date)
  - depositHistory (Number)
  - paymentMethod (Cash | Credit Card | Debit Card | Mobile Payment)

Rules:
- Always filter by owner
- Bills represent completed sales
