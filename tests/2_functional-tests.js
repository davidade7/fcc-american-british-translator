const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Test 2-1 : Translation with text and locale fields: POST request to /api/translate', function(done) {
    // Setup
    let input = {text: "Paracetamol takes up to an hour to work.", locale: "british-to-american"}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        done();
      })
  });
  test('Test 2-2 : Translation with text and invalid locale field: POST request to /api/translate', function(done) {
    // Setup
    let input = {text: "Paracetamol takes up to an hour to work.", locale: "french-to-american"}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      })
  });
  test('Test 2-3 : Translation with missing text field: POST request to /api/translate', function(done) {
    // Setup
    let input = {locale: "british-to-american"}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      })
  });
  test('Test 2-4 : Translation with missing locale field: POST request to /api/translate', function(done) {
    // Setup
    let input = {text: "Paracetamol takes up to an hour to work."}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      })
  });
  test('Test 2-5 : Translation with empty text: POST request to /api/translate', function(done) {
    // Setup
    let input = {text: "", locale: "british-to-american"}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      })
  });
  test('Test 2-6 : Translation with text that needs no translation: POST request to /api/translate', function(done) {
    // Setup
    let input = {text: "Hello World", locale: "british-to-american"}
    // Test
    chai.request(server)
      .keepOpen()
      .post('/api/translate')
      .send(input)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.text, 'Hello World');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      })
  });
});
