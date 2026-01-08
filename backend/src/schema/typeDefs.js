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

  type Mutation {
    updateUser(id: ID!): User
    updatePost(id: ID!): Post
    createComment(authorId: ID!, postId: ID!, text: String!): Comment
  }
`;
