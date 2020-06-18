import userModel from '../../../db/models/user.model';

export default {
  Query: {
    user_allUsers: () => userModel.findAll(),
  },
};
