const { User } = require("../model/User");

exports.create = async (ctx) => {
  const {
    name, email, age, password
  } = ctx.request.body;

  if (!name || !email || !age || !password) {
    throw new Error("Informe todos os parâmetros")
  }

  const user = new User(name, email, age, password);

  ctx.response.body = user
};

exports.getAllUsers = async (ctx) => {
  const getUsers = await User.getAll();
  ctx.response.body = getUsers;
}