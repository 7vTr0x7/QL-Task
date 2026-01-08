import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserUpdateInput) {
    updateUser(id: $id, input: $input) {
      id
      username
      email
    }
  }
`;
