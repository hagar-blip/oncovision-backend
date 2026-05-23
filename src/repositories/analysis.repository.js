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
      organType: true,
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

exports.createAnalysis = async (
  filename,
  patientId,
  organType
) => {
  return await prisma.analysis.create({
    data: {
      patientId: Number(patientId),
      imageUrl: filename,
      organType: organType,
      analysisType: organType.toUpperCase(), // ضيفي ده
      riskLevel: "Pending",
      status: "processing"
    }
  });
};