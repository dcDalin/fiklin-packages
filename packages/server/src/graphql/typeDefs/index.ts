import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    user: User
  }
`;

export default typeDefs;
