const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const upload = require("../config/multer");
const analysisController = require("../controllers/analysis.controller");

router.get("/recent", auth, analysisController.getRecent);

router.post(
  "/upload",
  auth,
  upload.single("image"),
  analysisController.upload
);

module.exports = router;