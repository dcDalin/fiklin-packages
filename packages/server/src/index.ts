import 'dotenv/config';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import client from '@fiklin/client';
import db from './db';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import env from './env';

// Env vars
const PORT = env('PORT');
const NODE_ENV = env('NODE_ENV');

(async () => {
  try {
    const app = express();

    app.disable('x-powered-by');

    app.use(
      cors({
        credentials: true,
        origin: '*',
      }),
    );

    app.use(bodyParser.json());

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req, res, connection }) => {
        if (connection) {
          // check connection for metadata
          return connection.context;
        }
        return { req, res };
      },
      introspection: true,
      playground: NODE_ENV !== 'production',
    });

    server.applyMiddleware({ app, cors: false });

    const httpServer = createServer(app);

    server.installSubscriptionHandlers(httpServer);

    // authenticate our sequelize
    await db.authenticate();

    // Bootstrap client app
    await bootstrapClientApp(app);

    // Listen
    httpServer.listen({ port: PORT }, () =>
      // tslint:disable-next-line: no-console
      console.log(
        `
        ################################################
        🚀 Client ready at http://localhost:${PORT} 🚀

        🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀
        ################################################
        `,
      ),
    );
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
})();

async function bootstrapClientApp(expressApp) {
  await client.prepare();
  expressApp.get('*', client.getRequestHandler());
}
