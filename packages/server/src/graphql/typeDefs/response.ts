import { gql } from 'apollo-server-express';

export default gql`
  type Response {
    status: String!
    message: String!
  }
`;
