# Order Payment


## Handling Order Payment Webhook Events

### Overview

When a payment for an order is received, our system triggers a webhook event. This event is sent to the endpoint you have specified in the admin dashboard. It's crucial to handle this webhook correctly to update the order status in your system.

### Setting Up the Webhook Endpoint

* **Endpoint Configuration** : Define the endpoint in the admin dashboard where webhook events will be sent.
* **Security Measures** : Ensure your endpoint is secure and can validate the authenticity of the webhook events received.

### Webhook Event Details

* **Event Trigger** : A webhook event is sent when a payment for an order is processed.
* **Data Included** : The webhook payload includes details about the order, particularly the `orderPayment` status.

### Handling the `orderPayment` Status

* **Status Importance** : The `orderPayment` status is a key indicator of the payment state.
* **Statuses to Note** :
* **PAID** : When the `orderPayment` status is set to `PAID`, it signifies that the payment has been completed successfully.
* **Other Statuses** : Any status other than `PAID` does not confirm the completion of the payment.

### Order Processing Based on Payment Status

* **Order Status Update** : Once the `orderPayment` status is `PAID`, you can safely update the order to a 'Delivered' state in your system.
* **Handling Other Statuses** : For statuses other than `PAID`, implement appropriate logic to handle incomplete or failed payments.

### Best Practices

* **Logging** : Keep logs of the webhook events for troubleshooting and auditing purposes.
* **Idempotency** : Ensure your webhook handling logic is idempotent to avoid duplicate processing in case of multiple event deliveries.
* **Timely Processing** : Process webhook events promptly to maintain up-to-date order status in your system.

---

 **Note** : Modify these instructions as necessary to align with your specific implementation and business logic. Ensure your team is familiar with the nuances of handling payment webhook events to maintain accurate order statuses.
