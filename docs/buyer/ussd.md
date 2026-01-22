---
sidebar_position: 12
---

# How to Use USSD

You can access Sevi services without the app by dialing **`*789*7788#`**.  

---

## 1. What You See When You Dial

You will immediately see the **latest 5 orders** you have requested to be paid, including their status and due dates:

```text
Pay orders
1. selling company - 2000 KES - PENDING - 01/26/2026
2. selling company - 1500 KES - PAID - 01/20/2026
3. selling company - 2200 KES - DUE - 12/26/2025
4. selling company - 4000 KES - LATE - 11/28/2025
5. selling company - 500 KES - DELIVERED - 03/20/2025


9. Main Menu
```

### Split Payment (Pay Now + Pay Later)

When you select a specific order (for example 1), you will be guided through a split payment flow:

```text
Pay now amount
Order: D682525
Amount: 2000 KES

1. Continue to pay order with credit
2. Change pay later amount

8. Back
9. Main menu
```

upon selecting option `1` you will be required to enter your 4-digit PIN to confirm payment. (Sevi Access PIN).

The payment will be confirmed, that is if the limit available fits the full Order Amount. Otherwise an error will be shown.

upon selecting option `2` you will see:
```text
Pay Later Amount
Enter Pay Later amount (Max: 2000):

(Enter '0' to cancel)

```

When you enter an amount greater than 0 (example 1000) you will see:
```text
Payment Method
Total: 2000 KES
Pay Later: 1000 KES
Pay Now: 1000 KES

Select Pay Now Method:
1. M-Pesa
2. Sevi Wallet
3. Back

```

choose payment method (`M-Pesa`, `Sevi Wallet`) and when on success, The remaining balance will be automatically set as Pay Later (Sevi Credit) confirmed.

:::tip 
If paying via `Sevi Wallet` or `Sevi Credit`: enter your Sevi PIN → payment completes.
:::
---


## 2. Main Menu Options

When you input `9` which is the default to go back to main menu you will see:

```text
1. Pay orders  
2. Verify Payment
3. My account
4. Support
```

### **1. Pay Order**
If you have orders you will see 5 latest orders:

```text
Pay orders
1. selling company - 2000 KES - PENDING - 01/26/2026
2. selling company - 1500 KES - PAID - 01/20/2026
3. selling company - 2200 KES - DUE - 12/26/2025
4. selling company - 4000 KES - LATE - 11/28/2025
5. selling company - 500 KES - DELIVERED - 03/20/2025

```

If no orders you will see:

```text
You have no orders to pay.
9. Main Menu
```

---

### **2. Verify Payment**
Check if your payment went through.

```text
Please enter the invoice number, order ID, or transaction ID:

```

Enter the invoice number, order number or transaction ID to view the status.

---

### **3. My Account**
If you are new and not completed the initial steps of registration you will see:

```text
Welcome to Sevi! To access your account, please complete the setup:
1. Set PIN
2. Accept Terms & Conditions

9. Main menu
```

If you have completed the initial 5 steps of onboarding you will see:

```text
Wallet balance: 0 KES
Available Pay Later balance: 2500 KES
Open balance (what to pay): 0 KES
Status: Account is able to trade on credit

1. PIN Recovery
2. Transactions
3. Orders
4. Wallet topup

9. Main menu
```

If there is no limit, Status will show "No available credit limit, onboard via app required"

#### **1. PIN Recovery**

This option under My Account will help you in changing of your access pin, it will ask for only ID Number and Date of Birth as used during verification of your account.

#### **2. Transactions**

See your latest activities (top-ups, withdrawals, or deductions):

Money `IN` and `OUT` meaning top-ups and widthrawals/deductions respectively.

```text
Last 5 Transactions

8. Back to account
9. Main menu
```

#### **3. Orders**

This will take you back to the same Pay Orders section

#### **4. Wallet topup**

Currently this option will display the Sevi Paybill option steps to Lipa Na Mpesa Method.

=>**PAYBILL NO. 4042419**

=>**ACCOUNT NO. (Your Phone number registered in Sevi)**

Upon success the amount will be deposited in your Sevi Wallet Account.

---

### **4. Support**

```text
Call us: 0709924424
WhatsApp: 0111534438
Email: support@sevi.io

For assistance with your account, orders, or payments, our support team is available to help you.

9. Main menu
```


---

# Important Notes
- USSD works only from your registered Sevi phone number
- Payments update instantly in the Sevi system
- Available screens depend on your order and account status
- Never share your Sevi PIN with anyone
- Standard USSD charges may apply
- Terms and conditions apply
