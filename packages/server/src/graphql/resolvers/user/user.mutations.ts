import bcryptjs from 'bcryptjs';
import userModel from '../../../db/models/user.model';
import validateSignUp from './validations/validateSignUp';
import { SUCCESS, FAILURE } from '../../constants/status';
import { generateToken } from '../../../utils/generateToken';
import logs from '../../../utils/logs';

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
        const validate = await validateSignUp(
          firstName,
          lastName,
          email,
          password,
        );

        // if validation fails i.e value of validate is not null
        if (validate) {
          return {
            status: FAILURE,
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
          // NOTE: Confirmation email sent from userModel
          const token = generateToken(res);
          return {
            status: SUCCESS,
            message: token,
          };
        }
        logs('Could not sign up user', 'user.mutations.ts');
        return {
          status: FAILURE,
          message: 'Could not create account, please try again later.',
        };
      } catch (error) {
        logs('Sign up error caught', 'user.mutations.ts');
        return {
          status: FAILURE,
          message: `Error: ${error}`,
        };
      }
    },
  },
};
