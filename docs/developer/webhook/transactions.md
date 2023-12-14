# Transactions

The payment recieved webhook will send a payload corresponding to the transactionSearch API, the response will have the the following payload:

```graphql
type TransactionResponse {
amount: Float!
balanceAfter: Float
createdAt: DateTime
currency: CurrencyEnum
description: String
fee: Float
id: String!
method: TransactionMethodEnum
name: String
order: Order
orderId: String
paymentType: PaymentTypesEnum
paymentTypeId: String
totalAmount: Float
transactionType: TransactionType
walletDetails: WalletItemType
walletId: String
}
```

To inspect the payload, navigate to https://partner.sevi.io/graphql open the docs > click transactionSearch and inspect the input and response type to better understand the webhook payload.
