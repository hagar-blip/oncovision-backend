const analysisRepository = require("../repositories/analysis.repository");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");


const qualityCheckModel = async (imageUrl) => {
  return {
    isValidMRI: true,
    isBlurry: false
  };
};

const classificationModel = async (imageUrl) => {
  return {
    hasTumor: true,
    confidence: 0.92
  };
};

const heatmapModel = async (imageUrl) => {
  return "https://fake-heatmap-url.com/heatmap.jpg";
};

const detectionModel = async () => {
  return {
    x: 120,
    y: 180,
    w: 80,
    h: 90
  };
};

const segmentationModel = async () => {
  return "https://fake-mask-url.com/mask.jpg";
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

  
  const analysis = await analysisRepository.createAnalysis(
    imageUrl,
    patientId,
    organType
  );


  const quality = await qualityCheckModel(imageUrl);

  if (!quality.isValidMRI) {
    return {
      status: "failed",
      message: "Please upload a valid MRI scan"
    };
  }

  if (quality.isBlurry) {
    return {
      status: "failed",
      message: "Image is blurry, please upload a clearer scan"
    };
  }

  
  const classification = await classificationModel(imageUrl);

  if (!classification.hasTumor) {

    await analysisRepository.updateAnalysis(analysis.id, {
      status: "completed",
      riskLevel: "Low",
      prediction: "Normal",
      confidence: classification.confidence
    });

    return {
      status: "completed",
      prediction: "Normal",
      riskLevel: "Low",
      confidence: classification.confidence
    };
  }

  const heatmapUrl = await heatmapModel(imageUrl);

  const detection = await detectionModel(imageUrl);

  const maskUrl = await segmentationModel(imageUrl);

  const result = await analysisRepository.updateAnalysis(analysis.id, {
    status: "completed",
    riskLevel: "High",
    prediction: "Tumor Detected",
    confidence: classification.confidence,
    heatmapUrl,
    maskUrl,
    tumorSize: "2.8 cm",
    location: "Right Frontal Lobe"
  });

  return result;
};

exports.updateResult = async (id, data) => {
  return await analysisRepository.updateAnalysisResult(
    id,
    data
  );
};