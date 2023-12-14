---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { FaPostman } from 'react-icons/fa';
import Button from '/components/button';

# Introduction

Partner APIs provide a seamless way to incorporate payment methods into your business infrastructure, enhancing the customer checkout experience. By integrating these APIs, you can offer more flexible payment options that fit naturally into various platforms and workflows.

### Examples of Partner API Integrations:

#### ERP Systems

- Custom Checkout Workflow** : Automate billing and invoicing by embedding payment processing within your Enterprise Resource Planning (ERP) system.
- Real-Time Financial Reporting** : Gain insights into your financials with transactions logged directly in your ERP for accurate reporting.

#### Payment Gateway Interfaces

- Streamlined Payments** : Connect your existing payment gateway interface with our API for smooth transaction processing.
- Enhanced Security** : Implement advanced security measures such as tokenization to safeguard customer data during transactions.

#### E-commerce Platforms

##### Adding a checkout option on CMS like WordPress, Joomla, shopify.

By tapping into the flexibility of partner APIs, businesses can create a more intuitive and efficient purchasing process for both their operational needs and their customer's convenience. Whether you are managing an online store or handling complex enterprise-level transactions, there is an integration solution that can meet your specific requirements.



# API

We currently offers a Graphql API, while the partner API's only expose a portion of the available API's. If your organization requires a different integration, please inform us, as we may have an API suitable for your needs. The Graphql can be queried using your standard REST client query tools.

The production partner Graphql API playground can be found at [Find here the production partner graphql API playground](https://partner.sevi.io/graphql)

```
https://partner.sevi.io/graphql
```

To execute queries or mutations, an authentication header should be set with a JSON formatted as follows:

Authorization: "token"

To obtain your API token, please visit the following link: [get your API token](/docs/developer/authentication)

# GraphQL

Tips for working with our GraphQL endpoint:

* If you are unsure of what to input, refer to the documentation in the playground for each input value.
* Generate query type security in the client using [https://the-guild.dev/graphql/codegen](https://the-guild.dev/graphql/codegen).
* If you are not familiar with GraphQL, use the playground to interact with the API.
* Use the autocomplete feature to help build your query.
* Refer to the documentation explorer in the playground for further assistance.
* Use query variables instead of inline variables.
