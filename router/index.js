const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const login = require("../controller/login");
const register = require("../controller/register");
const { emailValid } = require("../helpers/db-validator");
const validarCampos = require("../middleware/validar-campos");

function route() {
  router.post(
    "/register",
    [
      check("email", "Ingrese un Email").isEmail().not().isEmpty(),
      check("password", "Ingrese una contraseña").not().isEmpty(),
      check("email").custom(emailValid),
    ],
    validarCampos,
    register
  );
  router.post(
    "/login",
    [
      check("email", "El email is obligatorio").isEmail(),
      check("password", "Introduce un password").not().isEmpty(),
    ],
    validarCampos,
    login
  );
  return router;
}

module.exports = route;
