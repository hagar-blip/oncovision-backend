const prisma = require("../config/prisma");

exports.createUser = async (data) => {
  return await prisma.user.create({ data });
};

exports.findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email }
  });
};