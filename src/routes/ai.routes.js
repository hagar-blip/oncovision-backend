const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const aiController = require("../controllers/ai.controller");

router.post("/chat/start", auth, aiController.startChat);
router.post("/chat/message", auth, aiController.sendMessage);
module.exports = router;