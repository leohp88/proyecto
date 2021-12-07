const { request, response } = require("express");
const bcrypjs = require("bcryptjs");
//Modelo de la BD
const Usuario = require("../models/usuarios");

const register = async (req = request, res = response) => {
  const { email, password } = req.body;
  const usuario = new Usuario({ email, password });
  const salt = bcrypjs.genSaltSync(10);
  const hash = bcrypjs.hashSync(password, salt);
  usuario.password = hash;
  await usuario.save();
  res.json({ usuario });
};

module.exports = register;
