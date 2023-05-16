# Transactions

type: query

After you customer agrees the credit, Sevi will send the order money to your Sevi Wallet. This qeury list the transactions you recieved. These can be used to confirm order payments. 

example query:

```graphql
  query transactionSearch ($input: TransactionSearchInput!) {
    transactionSearch( input: $input) {
      hits {
        id
        description
        amount
        name
        createdAt
        totalAmount
        currency
        transactionType
        walletId
        description
        paymentType
        paymentTypeId
        transactionType
        method
        order {
            amount
            platformId
        }
      }
      total
    }
  }
```
