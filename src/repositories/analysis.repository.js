const prisma = require("../config/prisma");

exports.getRecent = async () => {
  return await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc"
    },
    take: 5,
    select: {
      id: true,
      analysisType: true,
      riskLevel: true,
      status: true,
      createdAt: true,
      patient: {
        select: {
          name: true
        }
      }
    }
  });
};

exports.createAnalysis = async (filename, patientId, organType) => {
  return await prisma.analysis.create({
    data: {
      patientId: Number(patientId),
      imageUrl: filename,
      organType,
      analysisType: organType.toUpperCase(),
      riskLevel: "Pending",
      status: "processing"
    }
  });
};

exports.getById = async (id) => {
  return await prisma.analysis.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      patient: true
    }
  });
};