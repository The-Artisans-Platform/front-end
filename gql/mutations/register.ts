import { gql } from "apollo-boost";

const REGISTER_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      displayName
      email
    }
  }
`;

export default REGISTER_MUTATION;
