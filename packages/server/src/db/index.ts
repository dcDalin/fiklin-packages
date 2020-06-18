import { Sequelize } from 'sequelize-typescript';
import env from '../env';
import models from './models';

const DATABASE_URL = env('DATABASE_URL');

const sequelize = new Sequelize(DATABASE_URL, {
  models,
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  // tslint:disable-next-line: no-console
  logging: console.log,
});

export default sequelize;
