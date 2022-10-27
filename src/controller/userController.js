const { User } = require("../model/User");

exports.create = async (ctx) => {
    const {
      name, age, email, password
    } = ctx.request.body;
    console.log(ctx.request.body)

  const user = new User(name, email, age, password);

  ctx.response.body = user
};

