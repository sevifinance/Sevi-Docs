---
sidebar_position: 1
---
# Customer Status

***type: query***

This api query can be used to check if your customer is registerd in the Sevi system. It will also return the pay later amount and availabilirty in the region.

The response body will be in the following format

```graphql
type CustomerStatusType {
	message: String!
	payLaterAmount: Float!
	status: CustomerStatus!
	url: String!
}
```

Example reponse payload:

```js
 return {
        status: CustomerStatus.ONBOARDING_REQUIRED,
        payLaterAmount: 0,
        message: "Customer needs to be onboarded on Sevi",
        url: "http://sevi.io"
      } 
```

The above example can be concluded from the graphql schema

![1684154631421](image/customerStatus/1684154631421.png)
