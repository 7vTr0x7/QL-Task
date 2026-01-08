import { GET_USERS } from "@/graphql/user/user.queries";
import type { User } from "@/types/user.types";
import { useQuery } from "@apollo/client/react";
import React from "react";
import { Button } from "../ui/button";

const Views: React.FC = () => {
  const { data } = useQuery<{ users: User[] }>(GET_USERS, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  const getAllUsers = () => {
    console.log(data);
  };

  return (
    <div >
      <Button onClick={getAllUsers}>Users</Button>
    </div>
  );
};

export default Views;
