const dashboardService = require("../services/dashboard.service");

exports.getStats = async (req, res) => {
  try {
    const stats = await dashboardService.getStats();

    res.json(stats);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};