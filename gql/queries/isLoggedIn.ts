import { gql } from "apollo-boost";

const IS_LOGGED_IN_QUERY = gql`
  query IsLoggedIn {
    isLoggedIn
  }
`;

export default IS_LOGGED_IN_QUERY;
