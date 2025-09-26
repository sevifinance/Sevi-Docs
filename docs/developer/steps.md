---
sidebar_position: 3
---
# Steps

# API Integration Steps

This document outlines the general steps for API integration. The process is designed to be straightforward and efficient.

## Step 1: Register a Sevi Seller Account

First, you need to register as a Sevi Seller. This is an essential step to get started with the integration process.

<!-- - **Action**: [Register seller account](/docs/seller/start) -->

## Step 2: Invoice Submission

Once registered, you can start sending invoices to Sevi for payment processing.

- **Action**: Send invoice details to the `createOrder` API.
  - [Order creation API](/docs/developer/API/mutations/orderCreate)
  - Authentication is required for linking the order to your Sevi Account.
    - [Authenticate](/docs/developer/authentication)

## Step 3: Payment Notification

After processing the payment, Sevi will send a webhook notification to inform you of the successful transaction.

- **Action**: Configure an endpoint for receiving order payment completion notifications.
  - [Webhooks Introduction](/docs/developer/webhook/intro)

## Step 4: Confirm Product Delivery

Inform Sevi when the products are shipped and delivered to the buyer. This action triggers the payment to the Seller's wallet.

- **Action**: Use the `orderDeliver` mutation to notify Sevi.
  - [Order Deliver API](/docs/developer/API/mutations/orderDeliver)

## Step 5: Receiving Payment

The seller will receive the order amount in their Sevi wallet.

<!-- - **Action**: [Withdraw funds](/docs/seller/withdraw) -->
  - Note: Sevi optionally settles the balance to a bank account every 24 hours.

## Overview

### Simple Flow

The steps above represent the simple workflow for integration with the Sevi API.

### Complete Flow

For more complex implementations or assistance, please contact our support team. We can guide you through different workflows based on your specific needs.

- Typical Workflow: *Customer Status > Payment Proposal > Order Create > Webhook Payment Notification*


<!-- ![alt text](/img/modules/apiFlow.jpg "flow") -->
