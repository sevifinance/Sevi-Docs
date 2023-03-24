---
sidebar_position: 4
---
## Webhooks

Webhooks are a way to communicate to your backend real-time by sending data to a predefined URL when a specific event occurs.
This will allow your applications to work together with Sevi seamlessly without manual intervention. They can be used web development and popular APIs provide webhook functionality.

Currently Sevi Support webhooks for the following Events

- Order Agreed
- Order Updated (delivered)
- Payment received

![1679655871790](image/webhooks/1679655871790.png)

Please setup webhooks from withing the admin portal > setting

Enable webhooks, select an event and input the url on what you would like to receive the payment from.

## Webhook Payload

Payload structure changes per webhook.
