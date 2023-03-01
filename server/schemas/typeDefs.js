const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    Books: [Book]!
  }

  type Book {
    _id: ID
    BookText: String
    BookAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    Books(username: String): [Book]
    Book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(title: String!): Book
    removeBook(BookId: ID!): Book
  }
`;

module.exports = typeDefs;