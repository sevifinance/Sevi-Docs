# Order Delivery

**Type**: Mutation

This mutation is crucial for notifying Sevi when an order is successfully delivered to the Buyer. Implementing this mutation is important for two key reasons:

1. **Initiating Buyer's Payments**: It triggers the start of payment processing for the buyer.
2. **Seller's Payment Release**: It ensures that the seller receives their payment promptly.

### API Body:

Use the following mutation structure to implement the Order Delivery Notification:

```graphql
mutation OrderDeliver($orderId: String!) {
  orderDeliver(orderId: $orderId) {
    order {
      amount
      status
    }
  }
}


Get a better grasp via the [Playground](https://partner.sevi.io)
```
