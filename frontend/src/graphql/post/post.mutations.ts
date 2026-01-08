import { gql } from "@apollo/client";
import { POST_FRAGMENT } from "./post.fragments";

export const CREATE_POST = gql`
  mutation CreatePost($authorId: ID!, $title: String!, $content: String!) {
    createPost(authorId: $authorId, title: $title, content: $content) {
      ...PostFragment
    }
  }
  ${POST_FRAGMENT}
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $input: PostUpdateInput) {
    updatePost(id: $id, input: $input) {
      ...PostFragment
    }
  }
  ${POST_FRAGMENT}
`;
