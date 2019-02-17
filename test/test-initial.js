const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, closeServer, runServer} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);


describe('Root', function() {



before(function() {
    return runServer();
});

after(function() {
    return closeServer();
});

    it('should serve static assets on connect', function() {
        return chai
        .request(app)
        .get('/')
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.html;
        });
    });
});