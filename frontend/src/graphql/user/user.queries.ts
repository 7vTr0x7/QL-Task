import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: ID!) {
    user(id: $id) {
      id
      username
      email
      posts
    }
  }
`;
