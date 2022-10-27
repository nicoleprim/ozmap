const Router = require('koa-router');
const koaBody = require('koa-body')();

var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`;
});

module.exports = router;