import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation CreateComment($authorId: ID!, $postId: ID!, $text: String!) {
    createComment(authorId: $authorId, postId: $postId, text: $text) {
      id
      author {
        id
        username
      }
      content
    }
  }
`;
