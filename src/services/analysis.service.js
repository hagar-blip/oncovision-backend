const analysisRepository = require("../repositories/analysis.repository");

exports.getRecent = async () => {
  return await analysisRepository.getRecent();
};

exports.upload = async (
  filename,
  patientId,
  organType,
  analysisType
) => {
  return await analysisRepository.createAnalysis(
    filename,
    patientId,
    organType,
    analysisType
  );
};