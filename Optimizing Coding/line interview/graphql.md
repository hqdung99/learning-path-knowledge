GRAPH QL (GRAPH QUERY LANGUAGE)

# Graph QL is a query language for APIs. It describe how to get data, and it use to get data from server to client. It help client get exactly data they need, nothing more.

GraphQL: business-centric, frequently evelving UI-first apps
RESTful: server-to-server, relationship-light, data-first apps.

- RESTful: developer think about what resource expose for front-end uses
- GraphQL: how to think about what user want to queries.

- GRAPHQL - A query language for your API
  GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

  Ask for what you need, get exactly that: Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphL are fast and stable because they control the data they get, not the server.

  Get many resources in a single request: GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GRAPHQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

  Describe what's possible with a type system: GraphQL APIs are organizes in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what's possible and provide clear and helpfull errors. Apps can use types to avoid writing manual parsing code.

  Evolve your API without versions: Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. By using single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code.

  - GraphQL: An Introduction

  * it organizes data into a graph using one interface
  * Objects are represented by nodes (defined using the GraphQL schema)
  * the relationship between nodes is represented by edges in the graph.
  * each object is then backed by a resolver that accesses the server's data
  * GraphQL server responds to an end user's reuest
  * begins with the query root
  * resolver executes every field the requested object
  * A key-value map houses each field's values, some return another object selecting another set of fields
  * This continues util only a string or a number is returned
  * The server then responds with a nested set of objects

  - The core difference between rest APIs and GraphQL

  * REST API is an architectural concept for network-based software
  * GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP. In addition, over the last few years, REST has been used to make new APIs, while the focus of GraphQL has been to optimize for performance and flexibility

  - Where GraphQL has the upper hand over rest APIs:

  * fetching exactly what you want

  - Where REST APIs Beat Out GraphQL

  * REST is too dominant

  - The Bottom Line on GraphQL

1. Goals

- maximize developer's productivity
- minimize the amounts of data transferred

2. Syntax

- Schema specification

1. server-side
2. what can your API do?
3. schemas ara graphs, hence the name
4. each Type is a Node
5. each SubField is an Edge
6. String/Int/Boolean/enum are scalars
7. scalars are Node properties
8. required (...!) and List([...]) are modifiers

```
type Query {
  me: User
}
type User {
  id: ID
  name: String!
  level: Membership
  friends: [User]
}
enum Membership {
  Silver
  Gold
  Platium
}
```

- Operation Specification

1. client-side
2. what does your UI want to get? (and no more)
3. operation queries are trees (not graphs)
4. multiple queries/mutation in one operation
5. accept variables
6. mutation implies side-effects
7. query implies side-effect free

```
query {
  me {
    name
    level
    friends { name }
  }
}

mutation ($name: String!) {
  registerUser(name: $name) {
    name
    level
  }
}
```

- Advanced features

1. directives: extend functionality of a type or a subfield
2. subscription: receive realtime pushed data
3. custom scalar type
4. interface union
5. extensions: automatic persisted query, tracing, query planner, caching

- GraphQL vs RESTful: Different Use-cases

1. different places to write business logic
2. one endpoint for everything vs for one resource
3. user defined caching vs http caching
4. one network request vs N+1 problem
5. continuously evolve vs semantic versioning
6. no standard vs no standard
