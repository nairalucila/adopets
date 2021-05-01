const { expect } = require('chai');
const { register } = require('../controllers/auth');
const { stub } = require('sinon');
const bcrypt = require('bcrypt');


describe('Auth tests', () => {
    it('Should throw an error if is not an valid email', (done) => {
        const req = {
            body: {
                email: 'moroelloco'
            }
        }
        const res = {};
        res.sendStatus = function (status) {
            if (status === 404) {
                res.status = 404
            }
        }

        register(req, res).then(r => {
            expect(res).to.have.property('status', 404)
            done()
        }).catch(console.log)
    })

    it('should throw an error if bcrypt fails', (done) => {
        const hash = stub(bcrypt, 'hash');
        bcrypt.hash.throws()
        const req = {
            body: {
                firstName: 'test',
                lastName: 'test',
                email: 'test@gmail.com',
                password: 'test',
                phone: 'test',
            }
        }
        const res = {};
        res.sendStatus = function (status) {
            res.status = status
        }
        register(req, res).then((r) => {
            console.log(r)
            expect(res).to.have.property('status', 500)
            done()
        }).catch(console.log)
    })
})