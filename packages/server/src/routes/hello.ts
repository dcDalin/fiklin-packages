import express from 'express';
import hello from '../actions/hello';

const helloRouter = express.Router();

helloRouter.post('/', hello);

export default helloRouter;
