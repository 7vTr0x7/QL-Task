import { GET_USERS } from "@/graphql/user/user.queries";
import type { User } from "@/types/user.types";
import { useQuery } from "@apollo/client/react";
import React from "react";

const UsersList: React.FC = () => {
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  if (loading) return <p>Loading . . ,</p>;

  if (error) return <p>Something went wrong</p>;

  return (
    <div className="flex gap-4 p-10">
      {data?.users.map((user: User) => (
        <div
          key={user.id}
          className=" border border-black rounded-md text-center p-10 w-[100%]"
        >
          <div className="flex flex-col gap-4">
            <span>{user.username}</span>
            <span>{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
