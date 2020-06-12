import auth0 from '../../utils/auth0';

const login = async (req, res) => {
  try {
    await auth0.handleLogin(req, res, {});
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error('Could not login: ', error);
    res.status(error.status || 500).end(error.message);
  }
};

const callback = async (req, res) => {
  try {
    await auth0.handleCallback(req, res, {});
    console.log('Callback called ********************************');
    console.log(req);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error('Could not login: ', error);
    res.status(error.status || 500).end(error.message);
  }
};

const me = async (req, res) => {
  try {
    await auth0.handleProfile(req, res, {});
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error('Could not login: ', error);
    res.status(error.status || 500).end(error.message);
  }
};

const logout = async (req, res) => {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error('Could not logout: ', error);
    res.status(error.status || 500).end(error.message);
  }
};

export { login, callback, me, logout };
