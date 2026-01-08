import { gql } from "@apollo/client";

export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    id
    content
    title
    author {
      id
      username
    }
  }
`;
