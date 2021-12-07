const Usuario = require("../models/usuarios");

const emailValid = async (email = "") => {
  const isEmail = await Usuario.findOne({ email });

  if (isEmail) {
    throw new Error(`El ${email} existe en la BD`);
  }
};

module.exports = {
  emailValid,
};
