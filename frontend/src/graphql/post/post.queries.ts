import { gql } from "@apollo/client";
import { POST_FRAGMENT } from "./post.fragments";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      ...PostFragment
    }
  }

  ${POST_FRAGMENT}
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      ...PostFragment
    }
  }
  ${POST_FRAGMENT}
`;
