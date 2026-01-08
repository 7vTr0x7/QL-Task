import { gql } from "@apollo/client";
import { COMMENT_FRAGMENT } from "./comment.fragments";

export const CREATE_COMMENT = gql`
  mutation CreateComment($authorId: ID!, $postId: ID!, $text: String!) {
    createComment(authorId: $authorId, postId: $postId, text: $text) {
      ...CommentFragment
    }
  }

  ${COMMENT_FRAGMENT}
`;
