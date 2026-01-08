import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "./user.fragments";

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserUpdateInput) {
    updateUser(id: $id, input: $input) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;
