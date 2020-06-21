// tslint:disable-next-line: import-name
import request from '../../before-all.spec';

describe('GraphQL', () => {
  it('Returns all users which is 0', (done) => {
    request
      .post('/graphql')
      .send({
        query: '{ user_allUsers { id firstName lastName userName email } }',
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // 0 users in the database
        res.body.data.user_allUsers.length = 0;
        done();
      });
  });
});
