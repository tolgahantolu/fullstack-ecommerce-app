import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($registerInput: Input!) {
    registerUser(registerInput: $registerInput) {
      id
      name
      surname
      email
      password
      token
    }
  }
`;
