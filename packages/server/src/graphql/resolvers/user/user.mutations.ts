import bcryptjs from 'bcryptjs';
import userModel from '../../../models/user.model';
import validateSignUp from './validations/validateSignUp';
import { success, failure } from '../../constants/status';
import { generateToken } from '../../../utils/generateToken';

interface SignUpArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default {
  Mutation: {
    // Sign up user
    user_signUp: async (_: null, args: SignUpArgs) => {
      try {
        const { firstName, lastName, email, password } = args;

        // validate input
        const validate = validateSignUp(firstName, lastName, email, password);

        // if validation fails i.e value of validate is not null
        if (validate) {
          return {
            status: failure,
            message: validate,
          };
        }

        // hash the password
        const hashedPassword = await bcryptjs.hash(password, 12);

        // save to db
        const res = await userModel.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        // if user added to db
        if (res) {
          // generate token
          const token = generateToken(res);
          return {
            status: success,
            message: token,
          };
        }
        return {
          status: failure,
          message: 'Could not create account, please try again later.',
        };
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log('Error: user.mutations.ts: ', error);
      }
    },
  },
};
