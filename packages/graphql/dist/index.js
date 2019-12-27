"use strict";
exports.__esModule = true;
var apollo_server_micro_1 = require("apollo-server-micro");
var db_1 = require("db");
exports.apolloServer = new apollo_server_micro_1.ApolloServer({
    schema: db_1.schema,
    context: db_1.createContext
});
function createHandler(_a) {
    var path = _a.path;
    return exports.apolloServer.createHandler({ path: path });
}
exports.createHandler = createHandler;
