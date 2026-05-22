const patientRepository =
  require("../repositories/patient.repository");

exports.createPatient = async (
  name,
  age,
  gender
) => {
  return await patientRepository.createPatient(
    name,
    age,
    gender
  );
};