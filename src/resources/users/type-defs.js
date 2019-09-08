const typeDefs = `
  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(user: UserInput): ID
    followUser(id: ID!, user: UserInput): ID
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    following: [User]
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }
`

module.exports = typeDefs
