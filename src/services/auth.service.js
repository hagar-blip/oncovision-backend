const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/auth.repository");

exports.register = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  return await authRepository.createUser(data);
};

exports.login = async (email, password) => {
  const user = await authRepository.findByEmail(email);

  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  delete user.password;

  return { user, token };
};