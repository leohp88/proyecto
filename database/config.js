const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("BD Conectada"))
  .catch((err) => console.log("Error al Conectar", err));

module.exports = mongoose;
