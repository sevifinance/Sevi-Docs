---
sidebar_position: 200
---

# Woocommerce

We enable a Woocommerce integrations via the Sevi Woocommerce plugin.

[Download the plugin as ZIP file](https://github.com/sevifinance/Sevi-Woocommerce-Plugin/archive/refs/heads/main.zip)

[Install the plugin into wordpress by uploading it](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/)


1. navigate to woocommerce settings > payments


![alt text](/img/woocommerce/woocommerceSettings.png "Settings")


2. click on Manage

![alt text](/img/woocommerce/pluginSettings.png "Settings")

3. Place your [Sevi API token](/docs/developer/authentication.md) into the Sevi Token field.


4. When clicking "save" the setup process will initiate. You can check if the configs are set correctly by going to woocommerce > settings > advances > webhooks.
   if you see items with the delivery adress starting with https://exodus.sevi.io then you are all setup correctly.


### testing the service
The most easy test, after the above setup is creating an order. Then going to the admin page and see if that order is listed as it should. 


### Testing for sucessfull sevi-woocommerce integration.

From your wordpress admin page navigate to WooCommerce settings > advanced > webhooks

You should see a minimal of two webhooks beeing created with an URL pointing to exodus.sevi.io.
with topics  "order.updated" and "order.created". If this is not the case contact us to resolve it.

![hooks](/img/woocommerce/hooks.png "hooks")


### Woocommerce orders do not appear in admin Dashboard

A common reason for this is that at creation of an order, the payment method is not set to Sevi. Only order with payment method set to Sevi handled by the system. If you create an order from the background make sure that at the billing section payment options is shown.



![payment Method](/img/woocommerce/selectPaymentMethod.png "Set payment method")
