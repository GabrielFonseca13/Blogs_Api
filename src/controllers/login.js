const { loginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const { error: serviceError, token } = await loginService.login(email, password);

    if (serviceError && serviceError.code === 'invalidCredentials') {
      return res.status(400).json({ message: serviceError.message });
    }

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'algo deu errado' });
  }
};

module.exports = {
  login,
};