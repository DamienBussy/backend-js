const request = require('supertest');
const app = require('../app');

// CreateUser
describe('Test : cannot create a user', function(){
    it('responds with json', function(done){
        request(app)
        .post('/api/createuser')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

// getAllUsers
describe('Test : Get all users', function(){
    it('responds with json', function(done){
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

// getOneUser
describe('Test : cannot get one user', function(){
    it('responds with json', function(done){
        request(app)
        .get('/api/users/0')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

// UpdateeUser
describe('Test : cannot update an user', function(){
    it('responds with json', function(done){
        request(app)
        .post('/api/updateuser')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

// DeleteUser
describe('Test : cannot delete an user', function(){
    it('responds with json', function(done){
        request(app)
        .post('/api/deleteuser')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});