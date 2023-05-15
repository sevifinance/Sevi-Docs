---
sidebar_position: 1
---
# Create Order

***type: mutation***

the Create order mutation api initiates a order in the Sevi system. This order can after creation be paid by multiple methods.





General integrations have two parts, 

- Create an order via the createOrder API
- Getting back the updated order status to via the configured webhooks. ( Write us an email to setup your webhook ) 

## Create order 
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




<Tabs>
<TabItem value="js" label="Nodejs">

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

</TabItem>



<TabItem value="php" label="PHP">

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

</TabItem>

</Tabs>