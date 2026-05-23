const analysisRepository = require("../repositories/analysis.repository");

exports.getRecent = async () => {
  return await analysisRepository.getRecent();
};

exports.upload = async (filename, patientId, organType) => {
  return await analysisRepository.createAnalysis(
    filename,
    patientId,
    organType
  );
};

exports.getById = async (id) => {
  return await analysisRepository.getById(id);
};