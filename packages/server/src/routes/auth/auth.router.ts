import express from 'express';
import { login, callback, me, logout } from './auth.functions';

const authRouter = express.Router();

authRouter.get('/login', login);
authRouter.get('/callback', callback);
authRouter.get('/me', me);
authRouter.get('/logout', logout);

export default authRouter;
