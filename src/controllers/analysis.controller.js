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
      req.file.buffer,
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

exports.getById = async (req, res) => {
  try {
    const analysis = await analysisService.getById(req.params.id);

    if (!analysis) {
      return res.status(404).json({ error: "Analysis not found" });
    }

    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateResult = async (req, res) => {
  try {

    const result =
      await analysisService.updateResult(
        req.params.id,
        req.body
      );

    res.json(result);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};