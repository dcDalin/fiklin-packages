import userModel from '../../../models/user.model';

export default {
  Query: {
    user_allUsers: () => userModel.findAll(),
  },
};
