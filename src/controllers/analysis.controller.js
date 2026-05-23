const analysisService = require("../services/analysis.service");

exports.getRecent = async (req, res) => {
  try {
    const analyses = await analysisService.getRecent();
    res.json(analyses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No image uploaded"
      });
    }

    const result = await analysisService.upload(
      req.file.buffer,   // مهم جدًا
      req.body.patientId,
      req.body.organType
    );

    res.status(201).json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
};