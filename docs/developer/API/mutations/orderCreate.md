# Order Create

**Type:** Mutation

## Overview

The `Order Create` mutation API is a key component in initiating payments within the Sevi system. This API manages the intricate details of orders and payments between you and your customers, ensuring efficient processing and risk assessment.

### Steps for Integration

Integrating this API involves two primary steps:

1. **Creating an Order**: Use the `orderCreate` API to initiate an order.
2. **Webhooks for Order Status**: Receive updated order statuses via configured webhooks. Contact us by email to set up your webhook.

## Response Body

The response body provides comprehensive details about the order. For more information, refer to our GraphQL documentation. Key components include:

- **Order**: Contains general order information.
- **Payment Options**: Details available payment methods (e.g., Mpesa, Airtel Bank, etc.).
- **Payment Proposals**: Returns credit proposal details related to the created order
