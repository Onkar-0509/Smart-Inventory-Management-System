---
collection: "user"
source: "user.md"
type: "schema"
---
Purpose:
Stores application users.

Fields:
- name (String)
- email (String)
- phoneNumber (String)
- lastSMSNotificationDate (Date)
- createdAt (Date)
- updatedAt (Date)

Restrictions:
- Password must never be queried
- User collection is NOT used for inventory queries
