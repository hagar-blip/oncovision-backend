const aiService = require("../services/ai.service");

exports.startChat = async (req, res) => {
  try {
    const result = await aiService.startChat(req.user.id);

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { sessionId, message } = req.body;

    const result = await aiService.sendMessage(
      sessionId,
      message
    );

    res.json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getChatHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const result =
      await aiService.getChatHistory(sessionId);

    res.json(result);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};