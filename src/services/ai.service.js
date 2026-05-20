const OpenAI = require("openai");
const aiRepository = require("../repositories/ai.repository");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.startChat = async (userId) => {
  return await aiRepository.createSession(userId);
};

exports.sendMessage = async (sessionId, message) => {

  await aiRepository.saveMessage(
    sessionId,
    "user",
    message
  );

  const completion =
    await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful medical AI assistant for oncology."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

  const reply =
    completion.choices[0].message.content;

  await aiRepository.saveMessage(
    sessionId,
    "assistant",
    reply
  );

  return {
    answer: reply
  };
};