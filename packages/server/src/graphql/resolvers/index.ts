import * as user from './user';

export default {
  Query: {
    ...user.userQueries.Query,
  },
  Mutation: {
    ...user.userMutations.Mutation,
  },
};
