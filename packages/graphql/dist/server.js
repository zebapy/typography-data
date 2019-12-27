"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var dotenv = require("dotenv");
dotenv.config();
var db_1 = require("db");
var graphqlServer = new graphql_yoga_1.GraphQLServer({ schema: db_1.schema, context: db_1.createContext() });
graphqlServer.start(function () {
    console.log("GraphQL Yoga Started!!");
    if (process.env.NODE_ENV !== "development") {
        setTimeout(function () {
            process.exit(0);
        }, 3000);
    }
});
