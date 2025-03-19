# Payment Link

### Simplify Your Checkout Process

The Sevi payment links offers a convenient way for your customers to complete order payments, regardless of whether they're on your website or mobile app.

**How it Works:**

1. **Create an Order:** When a customer places an order, use the `createOrder` API to generate a unique payment link.
2. **Share the Payment Link:**  Provide the payment link to your customer. This can be done through email, SMS, or by displaying it directly within your website or app.
3. **Customer Makes Payment:** Clicking the payment link directs the customer to a secure payment page where they can choose their preferred payment method and complete the transaction.
4. **Payment Confirmation (Optional):**  You can include a custom URL in the payment link that directs the customer back to your website or app after payment. On this page, you can call the payment status API to confirm the payment server-side and update your order status accordingly.

**Generate a QR code from the payment link URL and use it in your invoice.**

![1679667120345](image/qr-code.png)

**Benefits:**

* **Seamless Checkout:** Payment links streamline the checkout process, reducing friction and improving customer experience.
* **Flexibility:**  They can be used on various platforms, including websites, mobile apps, and email campaigns.
* **Security:** Payment links utilize secure payment gateways, ensuring safe transactions.

**Example Payment Link:**

```
https://p.sevi.io/D223123
```
