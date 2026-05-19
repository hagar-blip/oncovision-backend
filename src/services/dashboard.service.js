const dashboardRepository = require("../repositories/dashboard.repository");

exports.getStats = async () => {
  return await dashboardRepository.getStats();
};