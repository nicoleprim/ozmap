//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
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
