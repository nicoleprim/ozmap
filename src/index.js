//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
const PORT = process.env.PORT || 3000;

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from './routes.js';

const koa = new Koa();


//Uma rota de exemplo simples aqui.
//As rotas devem ficar em arquivos separados, /src/controllers/userController.js por exemplo
/* router.get('/users', async (ctx) => {
    ctx.status = 200;
    ctx.body = {total:0, count: 0, rows:[]}
});
 */
koa
  .use(Router.routes())
  .use(Router.allowedMethods())
  .use(bodyParser());

export const server = koa.listen(PORT);

