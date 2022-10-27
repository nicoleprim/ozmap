const Router = require('koa-router');
const koaBody = require('koa-body')();
const userController = require('./controller/userController');

var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`;
});

router.get('/users', koaBody, userController.getAllUsers);

router.post('/users', koaBody, userController.create);

router.put('/users/:nameuser', koaBody, userController.editByName);

router.delete('/users/:nameuser', koaBody, userController.deleteByName);

module.exports = router;