const typeDefs = `
  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(user: UserInput): ID
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }
`

module.exports = typeDefs
