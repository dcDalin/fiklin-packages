import { createServer } from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import nextApp from "@fiklin/client";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const { PORT, NODE_ENV } = process.env;

(async () => {
  try {
    const app = express();

    app.disable("x-powered-by");

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req, res, connection }) => {
        if (connection) {
          // check connection for metadata
          return connection.context;
        } else {
          return { req, res };
        }
      },
      introspection: true,
      playground: NODE_ENV !== "production",
    });

    server.applyMiddleware({ app, cors: false });

    const httpServer = createServer(app);

    server.installSubscriptionHandlers(httpServer);

    await bootstrapClientApp(app);

    httpServer.listen({ port: PORT }, () =>
      console.log(
        `
      ################################################
      🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀
      ################################################
      `
      )
    );
  } catch (e) {
    console.error(e);
  }
})();

async function bootstrapClientApp(expressApp) {
  await nextApp.prepare();
  expressApp.get("*", nextApp.getRequestHandler());
}
