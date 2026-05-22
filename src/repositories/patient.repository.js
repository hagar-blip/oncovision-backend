const { PrismaClient } =
  require("@prisma/client");

const prisma = new PrismaClient();

exports.createPatient = async (
  name,
  age,
  gender
) => {
  return await prisma.patient.create({
    data: {
      name,
      age: Number(age),
      gender
    }
  });
};