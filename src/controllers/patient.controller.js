const patientService =
  require("../services/patient.service");

exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    const patient =
      await patientService.createPatient(
        name,
        age,
        gender
      );

    res.status(201).json(patient);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};