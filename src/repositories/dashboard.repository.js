const prisma = require("../config/prisma");

exports.getStats = async () => {
  const totalPatients = await prisma.patient.count();

  const activeCases = await prisma.analysis.count({
    where: {
      status: "active"
    }
  });

  const highRiskCases = await prisma.analysis.count({
    where: {
      riskLevel: "High"
    }
  });

  return {
    totalPatients,
    activeCases,
    highRiskCases
  };
};