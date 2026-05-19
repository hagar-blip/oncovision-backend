const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    delete user.password;

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
exports.login = async (req, res) => {
  try {
    const result = await authService.login(
      req.body.email,
      req.body.password
    );

    res.status(200).json(result);

  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
};