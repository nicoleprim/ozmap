const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('./routes');

const koa = new Koa();


koa
  .use(Router.routes())
  .use(Router.allowedMethods())
  .use(bodyParser());

koa.listen(PORT);
