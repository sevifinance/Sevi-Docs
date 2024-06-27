# Return URL

**What is a Return URL?**

The return URL is the web address your customer will be redirected to after completing a payment on our platform. This allows you to display a confirmation message or take further actions based on the payment status.

**Supported Return URL formats:**

* Your mobile app URL (e.g.,`shop://`)
* A standard website URL (e.g.,`https://shop.com/order/success`)

**Return URL Parameters:**

The return URL will include several query parameters containing information about the transaction.

* `order_reference`: Unique identifier for the order (default)
* `platform_reference`: Your own reference for the order (if provided)
* `payment_status`: Status of the payment (e.g.,`succeeded`,`failed`,`cancelled`)
* `error_codes` (optional): If `payment_status` is `failed`, this may contain error codes for further details

**Example Return URL:**

```
https://shop.com/order/sevi/listener?order={platform_reference}&status={payment_status}&platform_reference={platform_reference}
```

**Verifying Payment Status:**

**Important:** Do not rely solely on the return URL parameters to determine payment success. We recommend performing an additional check using our API with the `order_reference` or `platform_reference` to verify the payment status (`paymentStatus = 'PAID'`). This ensures you have the most up-to-date information.
