# Order Create

**Type:** Mutation

## Overview
The `Create Order` mutation API is a key component in initiating payments within the Sevi system. This API manages the intricate details of orders and payments between you and your customers, ensuring efficient processing and risk assessment. 

### Steps for Integration
Integrating this API involves two primary steps:

1. **Creating an Order**: Use the `createOrder` API to initiate an order.
2. **Webhooks for Order Status**: Receive updated order statuses via configured webhooks. Contact us by email to set up your webhook.

## Response Body
The response body provides comprehensive details about the order. For more information, refer to our GraphQL documentation. Key components include:

- **Order**: Contains general order information.
- **Payment Options**: Details available payment methods (e.g., Mpesa, Airtel Bank, etc.).
- **Payment Proposals**: Returns credit proposal details related to the created order.

## Example Usage

### GraphQL Mutation

```graphql
mutation(
  $affiliate: String
  $OrderPaymentMethodsEnum: OrderPaymentMethodsEnum
  $items: [OrderItemInput!]
  $billing: BillingInput!
  $shipping: ShippingInput!
) {
  createOrder(
    input: {
      affiliateId: $affiliate
      paymentMethod: $OrderPaymentMethodsEnum
      items: $items
      shipping: $shipping
      billing: $billing
    }
  ) {
    id
    items {
      id
      price
      quantity
    }
    amount
  }
}


### example

GraphQl mutation

```graphql
mutation(
  $affiliate: String
  $OrderPaymentMethodsEnum: OrderPaymentMethodsEnum
  $items: [OrderItemInput!]!
  $billing: BillingInput!
  $shipping: ShippingInput!
) {
  
  createOrder(
    input: {
      affiliateId: $affiliate
      paymentMethod: $OrderPaymentMethodsEnum
      items: $items
      shipping: $shipping
      billing: $billing
    }
  ) {
    id
    items {
      id
      price
      quantity
    }
    amount
  }
}

```

variables:

```json
{
  "OrderPaymentMethodsEnum": "INSTALLMENTS",
  "affiliate": "",
  "billing": {
    "address1": "",
    "city": "nairobi",
    "country": "KE",
    "email": "test@sevi.io",
    "firstName": "John",
    "lastName": "Bishop",
    "phoneNumber": "+254455758678"
  },
  "items":  [
     {
      "currency": "KES",
      "quantityUnit": "PIECES",
      "description": "Cooking oil",
      "gallery":  [
         {
          "url": "https://sevi-products.s3.eu-central-1.amazonaws.com/5ef5a8523c4a0829ed31b0e0/30965f4f-2ead-49ae-b41b-d2d6fc86dece/org.jpg"
        }
      ],
      "id": "d9bdb86a-2d70-406b-ae69-41e9e2b8a6a5",
      "name": "Some order",
      "quantity": 1,
      "unitPrice": 588
    }
  ],
  "shipping": {
    "address1": "",
    "city": "nairobi",
    "country": "KE",
    "email": "test@sevi.io",
    "firstName": "John",
    "lastName": "Bishop",
    "phoneNumber": "+254455758678"
  }
}

```

There are multiple ways we can implement the above query.

```js
const axios = require("axios")

axios({
  url: 'https://exodus.sevio/graphql',
  method: 'post',
  headers:{ Authorization: "YOUR SEVI TOKEN"}
  data: {
    query: `
        mutation(
          $OrderPaymentMethodsEnum: OrderPaymentMethodsEnum
          $items: [OrderItemInput!]!
          $billing: BillingInput!
          $shipping: ShippingInput!
        ) {
  
          createOrder(
            input: {
              paymentMethod: $OrderPaymentMethodsEnum
              items: $items
              shipping: $shipping
              billing: $billing
            }
          ) {
            id
            items {
              id
              price
              quantity
            }
            amount
          }
        }
      `,
     variables: {
        "OrderPaymentMethodsEnum": "INSTALLMENTS",
        "billing": {
          "address1": "",
          "city": "nairobi",
          "country": "KE",
          "email": "test@sevi.io",
          "firstName": "John",
          "lastName": "Bishop",
          "phoneNumber": "+254455758678"
        },
        "items":  [
           {
            "currency": "KES",
            "quantityUnit": "PIECES",
            "description": "Cooking oil",
            "gallery":  [
               {
                "url": "https://sevi-products.s3.eu-central-1.amazonaws.com/someproductphoto.jpg"
              }
            ],
            "id": "d9bdb86a-2d70-406b-ae69-41e9e2b8a6a5",
            "name": "Some order",
            "quantity": 1,
            "unitPrice": 588
          }
        ],
        "shipping": {
          "address1": "",
          "city": "nairobi",
          "country": "KE",
          "email": "test@sevi.io",
          "firstName": "John",
          "lastName": "Bishop",
          "phoneNumber": "+254455758678"
        }
    }
  }
}).then((result) => {
  console.log(result.data)
});
```

```PHP
<?php
    $accessToken = 'YOUR ACCESS TOKEN';

    //GRAPHQL request
    $query = ('
        mutation {
            createOrder(
                input: {
                    paymentMethod: INSTALLMENTS
                    items: [
                    {
                        currency: "KES"
                        quantityUnit: PIECES
                        description: "Cooking oil"
                        gallery: [
                            {
                                url: "https://sevi-products.s3.eu-central-1.amazonaws.com/someproductphoto.jpg"
                            }
                        ]
                        id: "d9bdb86a-2d70-406b-ae69-41e9e2b8a6a5"
                        name: "Some order"
                        quantity: 1
                        unitPrice: 588
                    }
                    ]
                    shipping: {
                        address1: ""
                        city: "nairobi"
                        country: KE
                        email: "test@sevi.io"
                        firstName: "John"
                        lastName: "Bishop"
                        phoneNumber: "+254455758678"
                    }
                    billing: {
                        address1: ""
                        city: "nairobi"
                        country: KE
                        email: "test@sevi.io"
                        firstName: "John"
                        lastName: "Bishop"
                        phoneNumber: "+254455758678"
                    }
                }
            ) {
                id
                items {
                    id
                    price
                    quantity
                }
                amount
            }
        }'
    );

    $variables = '';

    $json = json_encode( [ 'query' => $query ] );

    $ch = curl_init();
    curl_setopt( $ch, CURLOPT_URL, 'https://exodus.sevi.io/graphql' );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );  
    curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
    curl_setopt( $ch, CURLOPT_HEADER, true );
    curl_setopt( $ch, CURLOPT_VERBOSE, true );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $json );
    curl_setopt( $ch, CURLOPT_HTTPHEADER,
        array(
                'User-Agent: PHP Script',
                'Content-Type: application/json;charset=utf-8',
                'Authorization: ' . $accessToken 
            )
        ); 

    $response = curl_exec( $ch );

    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $header = substr($response, 0, $header_size);
    $body = substr($response, $header_size);

    echo '<pre>';
    echo '<b>Header</b><br /><br />';
    var_dump( $header );

    echo '<br /><br />';
    echo '<b>Body</b><br /><br />';
    var_dump( json_decode( $body ) );
    echo '</pre>';
?>
```
