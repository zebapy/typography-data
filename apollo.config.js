const path = require("path");

module.exports = {
  client: {
    addTypename: true,
    service: {
      name: "fonts",
      localSchemaFile: path.resolve(__dirname, "schema.graphql")
    },
    includes: ["packages/frontend/src/**/*.*", "packages/frontend/pages/**/*.*"]
  }
};
