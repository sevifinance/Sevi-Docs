# Order Deliver

***type: mutation***

This mutation will notify Sevi that the order is delivered to the Buyer. This is importent for two reasons.

1. The payments for the buyer will start
2. the seller will get

API body looks like >

```
mutation OrderDeliver($orderId: String!) {
  orderDeliver(orderId: $orderId) {
    order {
      amount
      status
    }
  }
}
```

Get a better grasp via the [Playground](https://partner.sevi.io)
