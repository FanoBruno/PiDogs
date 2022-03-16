/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const dog = {
  name: 'Pug',
  height_min: 10,
  height_max: 12,
  weight_min: 10,
  weight_max: 12,
  life_span: 12
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: false })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe("Dogs Routes", function() {
  it('GET responds with a status 200 if it finds a dog for id',  function() {
    return agent 
      .get('/dogs/1') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  })
})

describe('Dogs Routes', function() {
  it('GET responds with a status 200 if it finds a dog', function() {
    return agent 
      .get('/dogs?name=Pug') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  });
})
