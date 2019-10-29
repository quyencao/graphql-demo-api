const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
type Mutation {
  createTodo(input: CreateTodoInput!): Todo
  updateTodo(id: ID!, input: UpdateTodoInput!): Todo
  deleteTodo(id: ID!): Boolean
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean
  createPost(input: CreatePostInput!): Post
  updatePost(id: ID!, input: UpdatePostInput!): Post
  deletePost(id: ID!): Boolean
}

type Query {
  getTodo(id: ID!): Todo
  getTodos: [Todo!]
  getUser(id: ID!): User
  getUsers: [User!]
  getPost(id: ID!): Post
  getPosts: [Post!]
}

input CreateTodoInput {
  text: String!
  completed: Boolean
}

input UpdateTodoInput {
  text: String
  completed: Boolean
}
input CreateUserInput {
  username: String!
  email: String!
  gender: String
}

input UpdateUserInput {
  username: String
  email: String
  gender: String
}
input CreatePostInput {
  title: String!
  body: String!
}

input UpdatePostInput {
  title: String
  body: String
}

type Todo {
  id: ID!
  text: String!
  completed: Boolean
}
type User {
  id: ID!
  username: String!
  email: String!
  gender: String
}
type Post {
  id: ID!
  title: String!
  body: String!
}
`;

module.exports = typeDefs;
