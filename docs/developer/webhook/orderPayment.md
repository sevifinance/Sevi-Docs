# Order Payment

## Handling Order Payment Webhook Events

### Overview

When a payment for an order is received, our system triggers a webhook event. This event is sent as an HTTP POST request to the endpoint you have specified in the admin dashboard.

### Setting Up the Webhook Endpoint

* **Endpoint Configuration**: Define the endpoint in the admin dashboard where webhook events will be sent.
* **Security Measures**: Ensure your endpoint is secure and can validate the authenticity of the webhook events received. The `Authorization` header will contain the token configured in your webhook settings.

### Handling the `paymentStatus`

* **PAID**: The payment has been completed successfully. You can safely update the order to a 'Delivered' state in your system.
* **PENDING**: The payment has not yet been completed. Implement appropriate logic to handle incomplete or failed payments.

### Best Practices

* **Logging**: Keep logs of the webhook events for troubleshooting and auditing purposes.
* **Idempotency**: Ensure your webhook handling logic is idempotent to avoid duplicate processing in case of multiple event deliveries.
* **Timely Processing**: Process webhook events promptly to maintain up-to-date order status in your system.
* **Return a 200/201 status**: The webhook will retry up to 3 times with exponential backoff if a non-200/201 response is returned.

---

## Payload Reference

The webhook sends a JSON body with two top-level keys: `order` and `customerVendor`.

```json
{
  "order":  { ... },
  "customerVendor":  { ... }
}
```

### `order`

Always present. Contains the order details and related information.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Order ID |
| `referenceNumber` | `string \| null` | Unique order reference (e.g. `ORD-123456`) |
| `platformReference` | `string \| null` | External platform reference |
| `platformId` | `string \| null` | External platform ID |
| `vendorId` | `string \| null` | Vendor wallet account |
| `customerId` | `string \| null` | Customer wallet account |
| `status` | `string \| null` | `PENDING`, `AWAITING_SHIPMENT`, `DELIVERED`, `ARCHIVED` |
| `paymentStatus` | `string` | `PENDING`, `PAID` |
| `paymentMethod` | `string \| null` | `SEVI_PAY`, `SEVI_WALLET`, etc. |
| `amount` | `number` | Order amount |
| `originalAmount` | `number` | Original amount before discount |
| `discount` | `number` | Discount applied |
| `fixedVat` | `number` | Fixed VAT amount |
| `percentageVat` | `number` | Percentage VAT |
| `rewardAmount` | `number` | Reward amount |
| `currency` | `string \| null` | `KES`, `UGX`, `USD` |
| `name` | `string \| null` | Order name / description |
| `phoneNumber` | `string \| null` | Customer phone number on the order |
| `notes` | `string \| null` | Order notes |
| `items` | `json \| null` | Order line items (shape varies by platform) |
| `ecommercePlatform` | `string \| null` | `SEVI`, `WOOCOMMERCE`, etc. |
| `creditConfigurationId` | `string \| null` | Credit configuration used |
| `paymentReferenceNumber` | `string \| null` | Payment workflow reference |
| `returnURL` | `string \| null` | Return URL after payment |
| `deliverDirect` | `boolean \| null` | Whether order is delivered directly |
| `createdByCustomer` | `boolean \| null` | Whether order was created by the customer |
| `createdAt` | `datetime` | Creation timestamp |
| `approvedByVendor` | `datetime \| null` | When approved by vendor |

#### `order.shipping`

Shipping / delivery address. `null` if not provided.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Shipping address ID |
| `firstName` | `string \| null` | First name |
| `lastName` | `string \| null` | Last name |
| `company` | `string \| null` | Company name |
| `address1` | `string \| null` | Address line 1 |
| `address2` | `string \| null` | Address line 2 |
| `landmark` | `string \| null` | Landmark |
| `city` | `string \| null` | City |
| `state` | `string \| null` | State / province |
| `postcode` | `string \| null` | Postal code |
| `country` | `string \| null` | Country code |
| `email` | `string \| null` | Email |
| `phoneNumber` | `string \| null` | Phone number |
| `longitude` | `string \| null` | GPS longitude |
| `latitude` | `string \| null` | GPS latitude |
| `shippingType` | `string \| null` | Shipping type |
| `shippingFee` | `number \| null` | Shipping fee |
| `isDefault` | `boolean \| null` | Whether this is the default address |
| `createdAt` | `datetime \| null` | Creation timestamp |

#### `order.billing`

Billing address. `null` if not provided.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Billing address ID |
| `firstName` | `string \| null` | First name |
| `lastName` | `string \| null` | Last name |
| `company` | `string \| null` | Company name |
| `address1` | `string \| null` | Address line 1 |
| `address2` | `string \| null` | Address line 2 |
| `city` | `string \| null` | City |
| `state` | `string \| null` | State / province |
| `postcode` | `string \| null` | Postal code |
| `country` | `string \| null` | Country code |
| `email` | `string \| null` | Email |
| `phoneNumber` | `string \| null` | Phone number |

### `customerVendor`

Customer details as known by the vendor. `null` if the customer/vendor relationship is not found.

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
  "order": {
    "id": "01234567-abcd-...",
    "referenceNumber": "ORD-123456",
    "platformReference": null,
    "platformId": null,
    "vendorId": "WAL-vendor-...",
    "customerId": "WAL-buyer-...",
    "status": "DELIVERED",
    "paymentStatus": "PAID",
    "paymentMethod": "SEVI_PAY",
    "amount": 5000.00,
    "originalAmount": 5000.00,
    "discount": 0.00,
    "fixedVat": 0.00,
    "percentageVat": 0.00,
    "rewardAmount": 0.00,
    "currency": "KES",
    "name": "Order for Widget",
    "phoneNumber": "+254712345678",
    "notes": null,
    "items": [
      {
        "id": "...",
        "name": "Widget",
        "price": 5000,
        "quantity": 1
      }
    ],
    "ecommercePlatform": "SEVI",
    "creditConfigurationId": "01234567-...",
    "paymentReferenceNumber": "wf-...",
    "returnURL": null,
    "deliverDirect": false,
    "createdByCustomer": false,
    "createdAt": "2025-01-15T09:00:00.000Z",
    "approvedByVendor": "2025-01-15T09:05:00.000Z",
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
  "customerVendor": {
    "name": "John Doe",
    "email": "john@example.com",
    "reference": "CUS018082",
    "phoneNumbers": ["+254712345678"]
  }
}
```
