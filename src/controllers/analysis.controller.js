const analysisService = require("../services/analysis.service");

exports.getRecent = async (req, res) => {
  try {
    const analyses = await analysisService.getRecent();

    res.json(analyses);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.upload = async (req, res) => {
  try {
    const result = await analysisService.upload(
      req.file.filename,
      req.body.patientId,
      req.body.organType,
      req.body.analysisType
    );

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};