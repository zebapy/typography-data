import { ApolloServer } from "apollo-server-micro";
export declare const apolloServer: ApolloServer;
export declare function createHandler({ path }: {
    path: string;
}): (req: any, res: any) => Promise<void>;
