const aiRepository = require("../repositories/ai.repository");

exports.startChat = async (userId) => {
  return await aiRepository.createSession(userId);
};

exports.sendMessage = async (sessionId, message) => {
  await aiRepository.saveMessage(
    sessionId,
    "user",
    message
  );

  const reply =
    "The risk level is High. Based on the MRI analysis, immediate clinical evaluation is recommended.";

  await aiRepository.saveMessage(
    sessionId,
    "assistant",
    reply
  );

  return {
    answer: reply
  };
};

exports.getChatHistory = async (sessionId) => {
  return await aiRepository.getMessages(sessionId);
};