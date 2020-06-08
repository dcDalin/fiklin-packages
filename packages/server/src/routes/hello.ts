import express from 'express';

const helloRouter = express.Router();

helloRouter.get('/', (req, res) => {
  res.send('Hello');
});

export default helloRouter;
