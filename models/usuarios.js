const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
  email: {
    type: String,
    unique: true,
    requeride: [true, "Debe ingresar un correo"],
  },
  password: {
    type: String,
    requeride: [true, "Debe ingresar un password"],
  },
});

usuarioSchema.methods.toJSON = function () {
  const { __v, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  usuario.email = usuario.email.toLowerCase();
  return usuario;
};

module.exports = model("Usuario", usuarioSchema);
