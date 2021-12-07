const jwt = require("jsonwebtoken");

const generarJWT = (uid = "") => {
  return new Promise((resp, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVEKEY,
      {
        expiresIn: "12h",
      },
      (err, token) => {
        if (err) {
          console.log("Hay un error");
          reject("No se pudo generar");
        } else {
          resp(token);
        }
      }
    );
  });
};

module.exports = generarJWT;
