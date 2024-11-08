# Credit Limit

This document explains how credit limits work on Sevi for sellers.

#### **What are Credit Limits?**

Credit limits determine the amount a buyer can purchase on credit (Order Now, Pay Later) from your store. These limits are set by the Sevi system based on both the buyer's and your track record on the platform.

#### **How are Buyer Limits Set?**

Sevi uses various data points to determine buyer limits, including:

* **Buyer's past purchase history:** Your order history with a buyer can influence their credit limit. By providing complete and accurate order history, you can help Sevi set appropriate limits for your buyers.

#### **How can I Provide Order History?**

There are two ways to share your order history data with Sevi:

* **Excel Upload:** You can upload your order data using the provided [Excel template](https://docs.google.com/spreadsheets/d/1BZK89VK8gNXYV0-RtY8sKykLYa8vEHpH/edit?gid=486363753#gid=486363753).
* **API Integration:** For a more automated solution, consider integrating your system with Sevi's API. Check the [development documentation](../../docs/developer/intro).
* **REST endpoint:** This allows Sevi to access customer data for further analysis.

#### **What are Seller Limits?**

There are three main types of seller limits that can prevent you from offering credit options:

* **Max Outstanding Installments:** This limit restricts the total amount of outstanding installments owed by all your buyers combined. Once buyers pay their installments, your available credit increases. Maintaining a positive track record can help raise this limit over time.
* **Order Amount Exceeds Allowed Limit:** This limit restricts the size of individual orders you can offer on credit. Your current track record determines the maximum order size you can support. Building a positive seller history on Sevi can help increase this limit.
* **Buyer's Delinquency:** If a buyer has past-due installments on your products or from other sellers on Sevi, they won't be able to use the "Order Now, Pay Later" option until those installments are paid.

**Error Messages and Troubleshooting:**

When you or your buyer reaches a credit limit, you'll see one of the following error messages:

* **Seller reached max of outstanding installments:** See above for explanation and solution.
* **Order amount exceeds allowed seller limit:** See above for explanation and solution.
* **Buyer should first pay the open installments:** Remind your buyer to pay their outstanding installments (link included): [Link to Buyer Installment Payment Instructions (replace with a non-clickable version)].
* **Order amount exceeds allowed buyer personal limit** or **Order amount exceeds allowed buyer company limit:** These messages indicate the buyer has reached their overall credit limit on Sevi, possibly due to unpaid installments from other sellers. Advise the buyer to settle outstanding installments or consider using a Limited Company account if available.

**Maintaining Good Seller Standing:**

By encouraging your buyers to pay installments on time and maintaining a positive track record on Sevi, you can benefit from increased credit limits, allowing you to offer your products on credit to a wider range of buyers.

---