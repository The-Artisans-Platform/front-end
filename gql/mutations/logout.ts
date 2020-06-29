import { gql } from "apollo-boost";

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export default LOGOUT_MUTATION;
