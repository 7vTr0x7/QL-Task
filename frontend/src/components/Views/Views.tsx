import { GET_POSTS_BY_UDER_ID, GET_USERS } from "@/graphql/user/user.queries";
import type { Post, User } from "@/types/user.types";
import { useMutation, useQuery } from "@apollo/client/react";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { GET_POST_BY_ID, GET_POSTS } from "@/graphql/post/post.queries";
import { UPDATE_USER } from "@/graphql/user/user.mutations";
import { CREATE_POST, UPDATE_POST } from "@/graphql/post/post.mutations";
import { CREATE_COMMENT } from "@/graphql/comment/comment.mutations";

const Views: React.FC = () => {
  const { data: users } = useQuery<{ users: User[] }>(GET_USERS, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });
  const { data: posts } = useQuery<{ posts: Post[] }>(GET_POSTS, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });
  const { data: postsByUserId } = useQuery<{ posts: Post[] }>(
    GET_POSTS_BY_UDER_ID,
    {
      fetchPolicy: "cache-and-network",
      errorPolicy: "all",
      variables: { userId: "695f87fc53c6bc580466503e" },
    }
  );
  const { data: postsByPostId } = useQuery<{ post: Post }>(GET_POST_BY_ID, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    variables: { id: "695f895866ec2250867cda22" },
  });

  const [updateUser] = useMutation(UPDATE_USER);
  const [updatePost] = useMutation(UPDATE_POST);
  const [createPost] = useMutation(CREATE_POST);
  const [createComment] = useMutation(CREATE_COMMENT);

  const handleUpdateUser = async () => {
    try {
      const id = new Date().getTime();
      const response = await updateUser({
        variables: {
          id: "695f87fc53c6bc580466503e",
          input: { username: `non${id}`, email: `non${id}@gmail.com` },
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const id = new Date().getTime();
      const response = await updatePost({
        variables: {
          id: "695f895866ec2250867cda22",
          input: { content: `non${id}`, title: `nothing${id}` },
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreatePost = async () => {
    try {
      const id = new Date().getTime();
      const response = await createPost({
        variables: {
          authorId: "695f87fc53c6bc580466503e",
          content: `non${id}`,
          title: `nothing${id}`,
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateComment = async () => {
    try {
      const id = new Date().getTime();
      const response = await createComment({
        variables: {
          authorId: "695f87fc53c6bc580466503e",
          postId: `695f895866ec2250867cda22`,
          text: `nothing${id}`,
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllUsers = () => {
    console.log(users);
  };
  const getAllPosts = () => {
    console.log(posts);
  };
  const getPostsByUserId = () => {
    console.log(postsByUserId);
  };
  const getPostByPostId = () => {
    console.log(postsByPostId);
  };

  return (
    <div className="flex flex-wrap gap-10 items-center">
      <Button onClick={getAllUsers}>Users</Button>
      <Button onClick={getPostsByUserId}>Posts By User Id</Button>
      <Button onClick={getPostByPostId}>Post By Post Id</Button>
      <Button onClick={getAllPosts}>Posts</Button>
      <Button onClick={handleUpdateUser}>Update User</Button>
      <Button onClick={handleUpdatePost}>Update Post</Button>
      <Button onClick={handleCreatePost}>Create Post</Button>
      <Button onClick={handleCreateComment}>Add Comment</Button>
    </div>
  );
};

export default Views;
