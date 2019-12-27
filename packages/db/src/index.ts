import { nexusPrismaPlugin } from "nexus-prisma";
import * as Nexus from "nexus";
import * as types from "./types";
import * as path from "path";

const cwd = process.cwd();

export const schema = Nexus.makeSchema({
  types: [types],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: cwd + "/../../schema.graphql"
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/photon",
        alias: "photon"
      },
      {
        source: path.join(cwd, "src/apollo/context.ts"),
        alias: "Context"
      }
    ]
  }
});

export * from "./types";
export * from "./context";
