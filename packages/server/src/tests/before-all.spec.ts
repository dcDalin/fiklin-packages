import supertest from 'supertest';
// tslint:disable-next-line: import-name
import server from '../index';

const request = supertest(server);

before((done) => {
  server.on('ready', () => {
    done();
  });
});

export default request;
