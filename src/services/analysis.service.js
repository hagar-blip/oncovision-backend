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
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

exports.getRecent = async () => {
  return await analysisRepository.getRecent();
};

exports.upload = async (imageBuffer, patientId, organType) => {
  const imageUrl = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "oncovision" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(imageBuffer).pipe(stream);
  });

  return await analysisRepository.createAnalysis(
    imageUrl,
    patientId,
    organType
  );
};