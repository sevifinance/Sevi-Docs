---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Sevi currently offers a Graphql API, while the partner API's only expose a portion of the available API's. If your organization requires a different integration, please inform us, as we may have an API suitable for your needs. The Graphql can be queried using your standard REST client query tools.

The production partner Graphql API playground can be found at [Find here the production partner graphql API playground](https://partner.sevi.io/graphql)

To execute queries or mutations, an authentication header should be set with a JSON formatted as follows:

{ Authorization: "token"}

To obtain your API token, please visit the following link: [get your API token](/docs/developer/APItoken)

# Flow

You can use the API's how ever you seen fit, but to give you some general idea here the flow some flows

<!-- [![1683877949551](/img/api/apiFlow.jpg)]() -->

#### Simple

*Create Order > Webhook payment notification*

#### Complete

*Customer Status > Payment Proposal > Order Create > webhook payment notification*

![alt text](/img/api/apiFlow.jpg "flow")

# GraphQL

Tips for working with our GraphQL endpoint:

* If you are unsure of what to input, refer to the documentation in the playground for each input value.
* Generate query type security in the client using [https://the-guild.dev/graphql/codegen](https://the-guild.dev/graphql/codegen).
* If you are not familiar with GraphQL, use the playground to interact with the API.
* Use the autocomplete feature to help build your query.
* Refer to the documentation explorer in the playground for further assistance.
* Use query variables instead of inline variables.
