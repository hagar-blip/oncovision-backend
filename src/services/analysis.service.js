const analysisRepository = require("../repositories/analysis.repository");

exports.getRecent = async () => {
  return await analysisRepository.getRecent();
};

exports.upload = async (filename, patientId) => {
  return await analysisRepository.createAnalysis(
    filename,
    patientId
  );
};