const express = require("express");
const router = express.Router();

const patientController =
  require("../controllers/patient.controller");

const auth =
  require("../middlewares/auth.middleware");

router.post(
  "/",
  auth,
  patientController.createPatient
);

module.exports = router;