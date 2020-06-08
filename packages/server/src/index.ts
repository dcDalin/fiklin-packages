import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import client from '@fiklin/client';
import hello from './routes/hello';

const { PORT } = process.env;

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

    // Routes
    app.use('/hello', hello);

    // Bootstrap client app
    await bootstrapClientApp(app);

    // Listen
    app.listen({ port: PORT }, () =>
      // tslint:disable-next-line: no-console
      console.log(
        `
        ################################################

        🚀 Server ready at http://localhost:${PORT} 🚀

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
