const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const route = require("./router");

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use("/", route());

//DB
require("./database/config");

app.listen(process.env.PORT, () => {
  console.log("Servidor Corriendo en el puerto 3000");
});
