import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
    comments: [Comment]
  }
  input UserUpdateInput {
    username: String
    email: String
  }

  input PostUpdateInput {
    title: String
    content: String
  }

  type Mutation {
    updateUser(id: ID!, input: UserUpdateInput!): User
    updatePost(id: ID!, input: PostUpdateInput!): Post
    createComment(authorId: ID!, postId: ID!, text: String!): Comment
  }
`;
