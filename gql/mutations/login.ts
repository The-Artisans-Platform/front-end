import { gql } from "apollo-boost";

const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      displayName
      email
    }
  }
`;

export default LOGIN_MUTATION;
