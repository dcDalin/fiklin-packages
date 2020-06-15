import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user_allUsers: [User]
  }

  extend type Mutation {
    user_signUp(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Response!
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
  }
`;
