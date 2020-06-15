import userModel from '../../../../models/user.model';

const validateSignUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  // set error to null
  let error = null;

  /*
    NOTE: if else statements since we only want to return a single validation error at a time
  */

  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // check email exists
  const emailExists = async () => {
    await userModel.findOne({ where: { email } });
  };

  // first name validation
  if (firstName.trim() === '') {
    error = 'First name is required';
  } else if (firstName.trim().length < 3) {
    error = 'First name should be at least 3 characters long';
  } else if (firstName.trim().length > 10) {
    error = 'First name should be less than 10 characters long';

    // last name validation
  } else if (lastName.trim() === '') {
    error = 'Last name is required';
  } else if (lastName.trim().length < 3) {
    error = 'Last name should be at least 3 characters long';
  } else if (lastName.trim().length > 10) {
    error = 'Last name should be less than 10 characters long';

    // email validation
  } else if (email.trim() === '') {
    error = 'Email is required';
  } else if (email.trim().length < 3) {
    error = 'Email should be at least 3 characters long';
  } else if (email.trim().length > 50) {
    error = 'Email should be less than 50 characters long';
  } else if (!email.trim().toLowerCase().match(emailRegex)) {
    error = 'Invalid email';
  } else if (emailExists) {
    error = 'Email already exists';

    // password validation
  } else if (password.trim() === '') {
    error = 'Password is required';
  } else if (password.trim().length < 6) {
    error = 'Password should be at least 6 characters long';
  } else if (password.trim().length > 20) {
    error = 'Password should be less than 20 characters long';
  }

  return error;
};

export default validateSignUp;
