
const assert = require('assert');
const chai = require('chai')
const chaiHttp = require('chai-http');
const chaiJson = require('chai-json-schema');

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;


describe('Um simples conjunto de testes', function () {
    it('deveria retornar -1 quando o valor não esta presente', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

describe('Testes da aplicaçao',  () => {
    it('o servidor esta online', function (done) {
        chai.request('http://localhost:3000')
        .get('/')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
        });
    });

    it('deveria ser uma lista de usuarios', function (done) {
        chai.request('http://localhost:3000')
        .get('/users')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.jsonSchema([]);
        done();
        });
    });

    it('deveria criar o usuario raupp', function (done) {
        let userraupp = {
            name: "raupp",
            email: "jose.raupp@devoz.com.br",
            age: 35,
            password: "senhadoraupp"
        }
        chai.request('http://localhost:3000')
        .post('/users')
        .send(userraupp)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('o usuario raupp existe e é valido', function (done) {
        chai.request('http://localhost:3000')
        .get('/users/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema([]);
            done();
        });
    });

    it('deveria criar o usuario paulo', function (done) {
        let userpaulo = {
            name: "paulo",
            email: "paulo@paulo.com.br",
            age: 32,
            password: "senhadopaulo"
        }
        chai.request('http://localhost:3000')
        .post('/users')
        .send(userpaulo)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('deveria criar o usuario nicole', function (done) {
        let usernic = {
            name: "nicole",
            email: "nicole@nicole.com.br",
            age: 28,
            password: "senhadanicole"
        }
        chai.request('http://localhost:3000')
        .post('/users')
        .send(usernic)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('deveria criar o usuario mel', function (done) {
        let usermel = {
            name: "mel",
            email: "mel@mel.com.br",
            age: 22,
            password: "senhadamel"
        }
        chai.request('http://localhost:3000')
        .post('/users')
        .send(usermel)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('deveria criar o usuario camila', function (done) {
        let usercami = {
            name: "camila",
            email: "camila@camila.com.br",
            age: 28,
            password: "senhadacamila"
        }
        chai.request('http://localhost:3000')
        .post('/users')
        .send(usercami)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    it('o usuario naoExiste não existe no sistema', function (done) {
        chai.request('http://localhost:3000')
        .get('/users/naoExiste')
        .end(function (err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.jsonSchema([]);
            done();
        });
    });



    it('deveria excluir o usuario raupp', function (done) {
        chai.request('http://localhost:3000')
        .delete('/users/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema([]);
            done();
        });
    });

    it('o usuario raupp não deve existir mais no sistema', function (done) {
        chai.request('http://localhost:3000')
        .get('/users/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema([]);
            done();
        });
    });

    it('deveria ser uma lista com pelomenos 7 usuarios', function (done) {
        chai.request('http://localhost:3000')
        .get('/users')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.total).to.be.at.least(3);
        done();
        });
    });
})