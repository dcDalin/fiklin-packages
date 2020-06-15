import jsonwebtoken from 'jsonwebtoken';
import env from '../env';

const JWT_SECRET = env('JWT_SECRET');

interface UserToken {
  id: string;
}
const generateToken = (user: UserToken) => {
  const { id } = user;
  return jsonwebtoken.sign({ id }, JWT_SECRET!, { expiresIn: '1d' });
};

export { generateToken };
