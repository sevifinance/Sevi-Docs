---
sidebar_position: 1
---
# Introduction

Webhooks are a way to communicate to your backend real-time by sending data to a predefined URL when a specific event occurs.
This will allow your applications to work together with Sevi seamlessly without manual intervention. The webhook will send a POST request to your predefined URL. You can use this information to process payment and other details in your system.

Currently Sevi Support webhooks for the following Events

- Order Agreed
- Order Updated (delivered)
- Payment received

![1679655871790](../image/webhooks/1679655871790.png)

Please setup webhooks from withing the admin portal > setting

Enable webhooks, select an event and input the url on what you would like to receive the payment from.
