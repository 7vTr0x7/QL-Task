import { GET_POSTS_BY_UDER_ID, GET_USERS } from "@/graphql/user/user.queries";
import type { Post, User } from "@/types/user.types";
import { useQuery } from "@apollo/client/react";
import React from "react";
import { Button } from "../ui/button";
import { GET_POST_BY_ID, GET_POSTS } from "@/graphql/post/post.queries";

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

  const getAllUsers = () => {
    console.log(users);
  };
  const getAllPosts = () => {
    console.log(posts);
  };
  const gatPostsByUserId = () => {
    console.log(postsByUserId);
  };
  const gatPostByPostId = () => {
    console.log(postsByPostId);
  };

  return (
    <div className="flex flex-wrap gap-10 items-center">
      <Button onClick={getAllUsers}>Users</Button>
      <Button onClick={gatPostsByUserId}>Posts By User Id</Button>
      <Button onClick={gatPostByPostId}>Post By Post Id</Button>
      <Button onClick={getAllPosts}>Posts</Button>
    </div>
  );
};

export default Views;
