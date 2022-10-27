const Router = require('koa-router');
const koaBody = require('koa-body')();
const userController = require('./controller/userController');

var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`;
});

router.post('/users', koaBody, userController.create);

module.exports = router;