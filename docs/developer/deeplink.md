# Payment Link

This link serves as a convenient means for your buyer to facilitate the payment for an order. The `createOrder` API will generate a unique payment link for you. This link can be used to client side navigate to payment selection. After the payment is handled you can include your own client navigation URL, then on that URL you can call the status of the payment via API to confirm the payment server side. 

Using this payment link ensures a seamless transaction process, whether your customers are on your website or mobile app.

To initiate a payment for Sevi, utilize the following format:

Redirect url

```markdown
https://p.sevi.io/D223123?redirect={https://shop.com/order/sevi/listener}
```

on the redirect URL we will include query params like:

https://shop.com/order/sevi/listener?order=D223123&status=completed

**Redirect URL**

This is the url where after payment completion Sevi should be navigated to, this can be your app(shop://) or an URL(https://). 

When your customer arrives back to your landing page. double check if the transaction for that order indeed was succesfully completed. This can be done via the API request called OrderSearch input ther eferenceNumber, orderId or platformReference to get the order returned check the status of that order on paymentStatus = PAID
