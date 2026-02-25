# Transactions

## Handling Transaction Webhook Events

### Overview

The transaction webhook fires for every transaction that occurs on your wallet. This includes order payments, settlements, and other wallet operations. The webhook sends an HTTP POST request with the transaction details and optionally the related order and customer.

### Webhook Event Details

* **Event Trigger**: A webhook event is sent when a transaction is created on your wallet.
* **Retry Policy**: Up to 3 attempts with exponential backoff if a non-200/201 response is returned.
* **Authentication**: The `Authorization` header contains the token configured in your webhook settings.

---

## Payload Reference

The webhook sends a JSON body with the transaction fields at the top level, plus optional `order` and `customer` objects.

### Transaction Fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Transaction ID |
| `amount` | `number` | Transaction amount |
| `fee` | `number` | Fee charged |
| `totalAmount` | `number` | Total amount (amount + fee) |
| `description` | `string \| null` | Transaction description |
| `paymentType` | `string` | Payment type (e.g. `ORDER`, `INSTALLMENT`, `SETTLEMENT`) |
| `currency` | `string` | `KES`, `UGX`, `USD` |
| `transactionType` | `string \| null` | `CREDIT`, `DEBIT` |
| `method` | `string \| null` | `MPESA`, `BANK`, `WALLET`, etc. |
| `walletId` | `string \| null` | Wallet account the transaction belongs to |
| `createdAt` | `datetime` | Transaction timestamp |
| `name` | `string \| null` | Name / label |
| `orderId` | `string \| null` | Related order ID (if applicable) |
| `status` | `string` | `COMPLETED`, `PENDING`, `FAILED` |

### `order` (optional)

Present when the transaction is linked to an order (`orderId` is not null). Contains the order information along with shipping and billing details.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Order ID |
| `referenceNumber` | `string \| null` | Unique order reference |
| `platformReference` | `string \| null` | External platform reference |
| `status` | `string \| null` | `PENDING`, `AWAITING_SHIPMENT`, `DELIVERED`, `ARCHIVED` |
| `paymentStatus` | `string` | `PENDING`, `PAID` |
| `amount` | `number` | Order amount |
| `currency` | `string \| null` | Order currency |
| `name` | `string \| null` | Order name |
| `phoneNumber` | `string \| null` | Customer phone number |
| `items` | `json \| null` | Order line items |
| `createdAt` | `datetime` | Order creation timestamp |
| `shipping` | `object \| null` | Shipping address (see [Order Payment](developer/webhook/order.md) docs) |
| `billing` | `object \| null` | Billing address (see [Order Payment](developer/webhook/order.md) docs) |

### `customer` (optional)

Present when the transaction is linked to an order that has a customer/vendor relationship. Customer details as known by the vendor.

| Field | Type | Description |
|---|---|---|
| `name` | `string \| null` | Customer name |
| `email` | `string \| null` | Customer email |
| `reference` | `string \| null` | Customer reference in the vendor's system |
| `phoneNumbers` | `string[]` | Customer phone numbers |

---

## Full Example

```json
{
  "id": "01234567-abcd-...",
  "amount": 1750.00,
  "fee": 0.00,
  "totalAmount": 1750.00,
  "description": "Order payment",
  "paymentType": "ORDER",
  "currency": "KES",
  "transactionType": "CREDIT",
  "method": "MPESA",
  "walletId": "WAL-vendor-...",
  "createdAt": "2025-01-15T10:05:00.000Z",
  "name": "Payment from John Doe",
  "orderId": "01234567-abcd-...",
  "status": "COMPLETED",
  "order": {
    "id": "01234567-abcd-...",
    "referenceNumber": "ORD-123456",
    "platformReference": null,
    "status": "DELIVERED",
    "paymentStatus": "PAID",
    "amount": 5000.00,
    "currency": "KES",
    "name": "Order for Widget",
    "phoneNumber": "+254712345678",
    "items": [
      {
        "id": "...",
        "name": "Widget",
        "price": 5000,
        "quantity": 1
      }
    ],
    "createdAt": "2025-01-15T09:00:00.000Z",
    "shipping": {
      "id": "01234567-abcd-...",
      "firstName": "John",
      "lastName": "Doe",
      "company": null,
      "address1": "123 Main St",
      "address2": null,
      "landmark": "Near the market",
      "city": "Nairobi",
      "state": "Nairobi",
      "postcode": "00100",
      "country": "KE",
      "email": "john@example.com",
      "phoneNumber": "+254712345678",
      "longitude": "36.8219",
      "latitude": "-1.2921",
      "shippingType": null,
      "shippingFee": null,
      "isDefault": true,
      "createdAt": "2024-08-01T00:00:00.000Z"
    },
    "billing": {
      "id": "01234567-abcd-...",
      "firstName": "John",
      "lastName": "Doe",
      "company": null,
      "address1": "123 Main St",
      "address2": null,
      "city": "Nairobi",
      "state": "Nairobi",
      "postcode": "00100",
      "country": "KE",
      "email": "john@example.com",
      "phoneNumber": "+254712345678"
    }
  },
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "reference": "CUS018082",
    "phoneNumbers": ["+254712345678"]
  }
}
```

:::note
The `order` and `customer` fields are only present when the transaction is linked to an order. For standalone transactions (e.g. settlements, top-ups), these fields will not be included.
:::
