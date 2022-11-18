const { gql } = require("apollo-server-express");

// Define typeDefs which include Query and Mutation types
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input NewBook {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: NewBook!): User
    removeBook(bookId: ID!): User
  }
`;

// export typeDefs for use in application
module.exports = typeDefs;
