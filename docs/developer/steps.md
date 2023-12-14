# Steps

Below a breakdown of the general steps taken to realize a payment integration

- Partner will register a Sevi Seller Account > [Register seller account](/docs/seller/start)
- Send invoice to Sevi to handle the payment for that invoice.

  - Send invoice details to the createOrder API[ order create](/docs/developer/API/mutations/orderCreate)
  - This order create is linked to the Partner Sevi Account via auth token > [Authenticate](/docs/developer/authentication)
- After payment is handled Sevi sends a webhook request to the Partner informing that the payment for that order is successfully done > [Webhooks](/docs/developer/webhook/intro)

  - make sure to configure an endpoint on where we can send this order payment complete information to
- After payment is delivered, inform Sevi via the orderDeliver mutation that the products have been shipped and deliverd to the buyer. This will trigger the payment to the Seller wallet and the buyer will start paying.
- The Seller will receive the order amount in the Sevi wallet.

6) Sevi will settle the balance to a bank account every 24 hours.

#### Simple

The above representation shows the simple flow.

*Create Order > Webhook payment notification*

#### Complete

There are other implementation based on your desired workflow. If you need help to better understand please contact support.

*Customer Status > Payment Proposal > Order Create > webhook payment notification*

![alt text](/img/api/apiFlow.jpg "flow")
