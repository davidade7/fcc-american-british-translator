const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  test("Test 1-1 : Translate Mangoes are my favorite fruit. to British English", function() {
    // input
    let textToTranslate = 'Mangoes are my favorite fruit.'
    let language = 'american-to-british'
    // output
    let expectedOutput = 'Mangoes are my favourite fruit.'
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-2 : Translate I ate yogurt for breakfast. to British English", function() {
    // input
    let textToTranslate = 'I ate yogurt for breakfast.'
    let language = 'american-to-british'
    // output
    let expectedOutput = 'I ate yoghurt for breakfast.'
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-3 : Translate We had a party at my friend's condo. to British English", function() {
    // input
    let textToTranslate = "We had a party at my friend's condo."
    let language = 'american-to-british'
    // output
    let expectedOutput = "We had a party at my friend's flat."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-4 : Translate Can you toss this in the trashcan for me? to British English", function() {
    // input
    let textToTranslate = "Can you toss this in the trashcan for me?"
    let language = 'american-to-british'
    // output
    let expectedOutput = "Can you toss this in the bin for me?"
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-5 : Translate The parking lot was full. to British English", function() {
    // input
    let textToTranslate = "The parking lot was full."
    let language = 'american-to-british'
    // output
    let expectedOutput = "The car park was full."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-6 : Translate Like a high tech Rube Goldberg machine. to British English", function() {
    // input
    let textToTranslate = "Like a high tech Rube Goldberg machine."
    let language = 'american-to-british'
    // output
    let expectedOutput = "Like a high tech Heath Robinson device."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-7 : Translate To play hooky means to skip class or work. to British English", function() {
    // input
    let textToTranslate = "To play hooky means to skip class or work."
    let language = 'american-to-british'
    // output
    let expectedOutput = "To bunk off means to skip class or work."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-8 : Translate No Mr. Bond, I expect you to die. to British English", function() {
    // input
    let textToTranslate = "No Mr. Bond, I expect you to die."
    let language = 'american-to-british'
    // output
    let expectedOutput = "No Mr Bond, I expect you to die."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-9 : Translate Dr. Grosh will see you now. to British English", function() {
    // input
    let textToTranslate = "Dr. Grosh will see you now."
    let language = 'american-to-british'
    // output
    let expectedOutput = "Dr Grosh will see you now."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-10 : Translate Lunch is at 12:15 today. to British English", function() {
    // input
    let textToTranslate = "Lunch is at 12:15 today."
    let language = 'american-to-british'
    // output
    let expectedOutput = "Lunch is at 12.15 today."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-11 : Translate We watched the footie match for a while. to American English", function() {
    // input
    let textToTranslate = "We watched the footie match for a while."
    let language = 'british-to-american'
    // output
    let expectedOutput = "We watched the soccer match for a while."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-12 : Translate Paracetamol takes up to an hour to work. to American English", function() {
    // input
    let textToTranslate = "Paracetamol takes up to an hour to work."
    let language = 'british-to-american'
    // output
    let expectedOutput = "Tylenol takes up to an hour to work."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-13 : Translate First, caramelise the onions. to American English", function() {
    // input
    let textToTranslate = "First, caramelise the onions."
    let language = 'british-to-american'
    // output
    let expectedOutput = "First, caramelize the onions."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-14 : Translate I spent the bank holiday at the funfair. to American English", function() {
    // input
    let textToTranslate = "I spent the bank holiday at the funfair."
    let language = 'british-to-american'
    // output
    let expectedOutput = "I spent the public holiday at the carnival."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-15 : Translate I had a bicky then went to the chippy. to American English", function() {
    // input
    let textToTranslate = "I had a bicky then went to the chippy."
    let language = 'british-to-american'
    // output
    let expectedOutput = "I had a cookie then went to the fish-and-chip shop."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-16 : Translate I've just got bits and bobs in my bum bag. to American English", function() {
    // input
    let textToTranslate = "I've just got bits and bobs in my bum bag."
    let language = 'british-to-american'
    // output
    let expectedOutput = "I've just got odds and ends in my fanny pack."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-17 : Translate The car boot sale at Boxted Airfield was called off. to American English", function() {
    // input
    let textToTranslate = "The car boot sale at Boxted Airfield was called off."
    let language = 'british-to-american'
    // output
    let expectedOutput = "The swap meet at Boxted Airfield was called off."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-18 : Translate Have you met Mrs Kalyani? to American English", function() {
    // input
    let textToTranslate = "Have you met Mrs Kalyani?"
    let language = 'british-to-american'
    // output
    let expectedOutput = "Have you met Mrs. Kalyani?"
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-19 : Translate Prof Joyner of King's College, London. to American English", function() {
    // input
    let textToTranslate = "Prof Joyner of King's College, London."
    let language = 'british-to-american'
    // output
    let expectedOutput = "Prof. Joyner of King's College, London."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-20 : Translate Tea time is usually around 4 or 4.30. to American English", function() {
    // input
    let textToTranslate = "Tea time is usually around 4 or 4.30."
    let language = 'british-to-american'
    // output
    let expectedOutput = "Tea time is usually around 4 or 4:30."
    // assert
    assert.equal(translator.main(textToTranslate, language)[0], expectedOutput);
  }); 
  test("Test 1-21 : Translate Mangoes are my favorite fruit. to British English", function() {
    // input
    let textToTranslate = 'Mangoes are my favorite fruit.'
    let language = 'american-to-british'
    // output
    let expectedOutput = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    // assert
    assert.equal(translator.main(textToTranslate, language)[1], expectedOutput);
  }); 
  test("Test 1-22 : Translate I ate yogurt for breakfast. to British English", function() {
    // input
    let textToTranslate = 'I ate yogurt for breakfast.'
    let language = 'american-to-british'
    // output
    let expectedOutput = 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.'
    // assert
    assert.equal(translator.main(textToTranslate, language)[1], expectedOutput);
  }); 
  test("Test 1-23 : Translate We watched the footie match for a while. to American English", function() {
    // input
    let textToTranslate = "We watched the footie match for a while."
    let language = 'british-to-american'
    // output
    let expectedOutput = "We watched the <span class=\"highlight\">soccer</span> match for a while."
    // assert
    assert.equal(translator.main(textToTranslate, language)[1], expectedOutput);
  }); 
  test("Test 1-24 : Translate Paracetamol takes up to an hour to work. to American English", function() {
    // input
    let textToTranslate = "Paracetamol takes up to an hour to work."
    let language = 'british-to-american'
    // output
    let expectedOutput = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."
    // assert
    assert.equal(translator.main(textToTranslate, language)[1], expectedOutput);
  }); 
});
