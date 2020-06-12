import { initAuth0 } from '@auth0/nextjs-auth0';
import env from '../env';

// env vars
const AUTH_0_DOMAIN = env('AUTH_0_DOMAIN');
const AUTH_O_CLIENT_ID = env('AUTH_O_CLIENT_ID');
const AUTH_0_CLIENT_SECRET = env('AUTH_0_CLIENT_SECRET');
const AUTH_O_REDIRECT_URI = env('AUTH_O_REDIRECT_URI');
const AUTH_O_POST_LOGOUT_REDIRECT_URI = env('AUTH_O_POST_LOGOUT_REDIRECT_URI');
const AUTH_O_COOKIE_SECRET = env('AUTH_O_COOKIE_SECRET');

// instanciate auth 0
export default initAuth0({
  domain: AUTH_0_DOMAIN,
  clientId: AUTH_O_CLIENT_ID,
  clientSecret: AUTH_0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: AUTH_O_REDIRECT_URI,
  postLogoutRedirectUri: AUTH_O_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: AUTH_O_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  },
});
