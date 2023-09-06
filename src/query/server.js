// graphql-server/server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`GraphQL server listening at http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();
