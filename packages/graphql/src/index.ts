import { ApolloServer } from "apollo-server-micro";
import { schema, createContext } from "db";

export const apolloServer = new ApolloServer({
  schema,
  context: createContext
});

export function createHandler({ path }: { path: string }) {
  return apolloServer.createHandler({ path });
}
