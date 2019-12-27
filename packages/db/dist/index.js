"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var nexus_prisma_1 = require("nexus-prisma");
var Nexus = require("nexus");
var types = require("./types");
var path = require("path");
var cwd = process.cwd();
exports.schema = Nexus.makeSchema({
    types: [types],
    plugins: [nexus_prisma_1.nexusPrismaPlugin()],
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
__export(require("./types"));
__export(require("./context"));
