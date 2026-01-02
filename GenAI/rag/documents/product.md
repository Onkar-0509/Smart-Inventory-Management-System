---
collection: "product"
source: "product.md"
type: "schema"
---

Purpose:
Stores inventory items.

Fields:
- owner (String): User ID (mandatory filter)
- name (String): Product name
- category (String): Product category
- actualPrice (Number): Cost price
- sellingPrice (Number): Selling price
- quantity (Number): Available stock
- reorderLevel (Number): Minimum stock threshold
- supplier (String): Supplier name reference
- expirationDate (Date, optional)
- dateAdded (Date)
- dateUpdated (Date)

Rules:
- Always filter by owner
- Low stock if quantity < reorderLevel
- Expired if expirationDate < today
