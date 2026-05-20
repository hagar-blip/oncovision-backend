const prisma = require("../config/prisma");

exports.createSession = async (userId) => {
  return await prisma.chatSession.create({
    data: { userId }
  });
};

exports.saveMessage = async (
  sessionId,
  sender,
  message
) => {
  return await prisma.chatMessage.create({
    data: {
      sessionId,
      sender,
      message
    }
  });
};