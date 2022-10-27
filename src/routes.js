import Router from 'koa-router';
import koaBody from 'koa-body';
import { server } from './index.js';

var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`;
});

export default router;