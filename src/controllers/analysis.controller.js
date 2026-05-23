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
      req.body.organType
    );

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await analysisService.getById(
      req.params.id
    );

    if (!result) {
      return res.status(404).json({
        error: "Analysis not found"
      });
    }

    res.json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};