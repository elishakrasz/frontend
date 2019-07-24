import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;