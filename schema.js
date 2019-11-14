const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean
}

type Query {
  getUser(id: ID!): User
  getUsers: [User!]
}

input CreateUserInput {
  username: String!
  email: String!
}

input UpdateUserInput {
  username: String
  email: String
}

type User {
  id: ID!
  username: String!
  email: String!
}
`;

module.exports = typeDefs;
