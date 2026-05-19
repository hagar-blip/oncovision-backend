const prisma = require("./config/prisma");

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Dr Ahmed",
      email: "ahmed@test.com",
      password: "123456",
      role: "doctor"
    }
  });

  console.log(user);
}

main();