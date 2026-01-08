import { config } from "dotenv";
import mongoose from "mongoose";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers/resolvers.js";

config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if (connect) console.log("MongoDB connected");
  } catch (error) {
    console.log("Failed to connect", error);
  }

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
