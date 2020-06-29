import { gql } from "apollo-boost";

const ME_QUERY = gql`
  query {
    me {
      id
      email
      firstName
      lastName
      displayName
      tzName
      tzAbv
      artisan
    }
  }
`;

export default ME_QUERY;
