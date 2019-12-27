import { GraphQLServer } from "graphql-yoga";

import * as dotenv from "dotenv";
dotenv.config();
import { schema, createContext } from "db";

const graphqlServer = new GraphQLServer({ schema, context: createContext() });

graphqlServer.start(() => {
  console.log("GraphQL Yoga Started!!");
  if (process.env.NODE_ENV !== "development") {
    setTimeout(() => {
      process.exit(0);
    }, 3000);
  }
});
