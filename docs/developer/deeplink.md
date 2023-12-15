# Payment Link

This link serves as a convenient means for your buyer to facilitate the payment for an order. The `createOrder` API can generate a unique payment link for you.

Using this payment link ensures a seamless transaction process, whether your customers are on your website or mobile app.

To initiate a payment for Sevi, utilize the following format:

```markdown
https://p.sevi.io/D223123?redirect={redirectURL}
```

**Redirect URL**

This is the url where after payment completion should be navigated. For example the checkout confirmation
