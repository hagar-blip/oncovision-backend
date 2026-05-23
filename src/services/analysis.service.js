// const analysisRepository = require("../repositories/analysis.repository");

// exports.getRecent = async () => {
//   return await analysisRepository.getRecent();
// };

// exports.upload = async (
//   filename,
//   patientId,
//   organType,
//   analysisType
// ) => {
//   return await analysisRepository.createAnalysis(
//     filename,
//     patientId,
//     organType,
//     analysisType
//   );
// };

const analysisRepository = require("../repositories/analysis.repository");

exports.getRecent = async () => {
  return await analysisRepository.getRecent();
};

exports.upload = async (imageBuffer, patientId, organType) => {
  // هنا هنخزن اسم placeholder مؤقت
  return await analysisRepository.createAnalysis(
    "uploaded-image",
    patientId,
    organType
  );
};