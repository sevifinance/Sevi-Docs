---
sidebar_position: 2
---

# Woocommerce

We enable a Woocommerce integrations via the Sevi Woocommerce plugin.

[download the plugin as ZIP file](https://github.com/sevifinance/Sevi-Woocommerce-Plugin/archive/refs/heads/main.zip)

[Install the plugin into wordpress by uploading it](https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/)


1. navigate to woocommerce settings > payments


![alt text](/img/woocommerce/woocommerceSettings.png "Settings")


2. click on Manage


![alt text](/img/woocommerce/pluginSettings.png "Settings")

3. Place your [Sevi API token](/docs/admin/API) into the Sevi Token field.




4. When clicking "save" the setup process will initiate. You can check if the configs are set correctly by going to woocommerce > settings > advances > webhooks.
   if you see items with the delivery adress starting with https://exodus.sevi.io then you are all setup correctly.


### testing the service
The most easy test, after the above setup is creating an order. Then going to the admin page and see if that order is listed as it should. 



