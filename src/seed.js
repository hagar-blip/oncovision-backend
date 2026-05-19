const prisma = require("./config/prisma");

async function main() {
  const patient1 = await prisma.patient.create({
    data: {
      name: "Ahmed Ali",
      age: 45,
      gender: "Male"
    }
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: "Sara Mohamed",
      age: 38,
      gender: "Female"
    }
  });

  await prisma.analysis.createMany({
    data: [
      {
        patientId: patient1.id,
        imageUrl: "brain1.jpg",
        analysisType: "MRI",
        riskLevel: "High",
        status: "active"
      },
      {
        patientId: patient2.id,
        imageUrl: "ct1.jpg",
        analysisType: "CT",
        riskLevel: "Low",
        status: "active"
      }
    ]
  });

  console.log("Seed done");
}

main();