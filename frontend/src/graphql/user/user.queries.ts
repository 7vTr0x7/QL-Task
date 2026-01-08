import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "./user.fragments";

export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      ...UserFragment

      posts
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_POSTS_BY_UDER_ID = gql`
  query GetPostsByUserId($userId: ID!) {
    user(id: $userId) {
      posts {
        id
        title
        content
      }
    }
  }
`;
