const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();

  // American to British English tests
  test('Translate "Mangoes are my favorite fruit" to British English', () => {
    const result = translator.translate('Mangoes are my favorite fruit', 'american-to-british');
    assert.equal(result.translation.includes('favourite'), true);
  });

  test('Translate "I ate yogurt for breakfast" to British English', () => {
    const result = translator.translate('I ate yogurt for breakfast', 'american-to-british');
    assert.equal(result.translation.includes('yoghurt'), true);
  });

  test('Translate "We had a party at my friend\'s condo" to British English', () => {
    const result = translator.translate('We had a party at my friend\'s condo', 'american-to-british');
    assert.equal(result.translation.includes('flat'), true);
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
    const result = translator.translate('Can you toss this in the trashcan for me?', 'american-to-british');
    assert.equal(result.translation.includes('bin'), true);
  });

  test('Translate "The parking lot was full" to British English', () => {
    const result = translator.translate('The parking lot was full', 'american-to-british');
    assert.equal(result.translation.includes('car park'), true);
  });

  test('Translate "Like a high tech Rube Goldberg machine" to British English', () => {
    const result = translator.translate('Like a high tech Rube Goldberg machine', 'american-to-british');
    assert.equal(result.translation.includes('Heath Robinson device'), true);
  });

  test('Translate "To play hooky means to skip class or work" to British English', () => {
    const result = translator.translate('To play hooky means to skip class or work', 'american-to-british');
    assert.equal(result.translation.includes('bunk off'), true);
  });

  test('Translate "No Mr. Bond, I expect you to die" to British English', () => {
    const result = translator.translate('No Mr. Bond, I expect you to die', 'american-to-british');
    console.log(result.translation);
    assert.equal(result.translation.includes('Mr'), true);
  });

  test('Translate "Dr. Grosh will see you now" to British English', () => {
    const result = translator.translate('Dr. Grosh will see you now', 'american-to-british');
    console.log(result.translation);
    assert.equal(result.translation.includes('Dr'), true);
  });

  test('Translate "Lunch is at 12:15 today" to British English', () => {
    const result = translator.translate('Lunch is at 12:15 today', 'american-to-british');
    assert.equal(result.translation.includes('12.15'), true);
  });

  // British to American English tests
  test('Translate "We watched the footie match for a while" to American English', () => {
    const result = translator.translate('We watched the footie match for a while', 'british-to-american');
    assert.equal(result.translation.includes('soccer'), true);
  });

  test('Translate "Paracetamol takes up to an hour to work" to American English', () => {
    const result = translator.translate('Paracetamol takes up to an hour to work', 'british-to-american');
    assert.equal(result.translation.includes('Tylenol'), true);
  });

  test('Translate "First, caramelise the onions" to American English', () => {
    const result = translator.translate('First, caramelise the onions', 'british-to-american');
    assert.equal(result.translation.includes('caramelize'), true);
  });

  test('Translate "I spent the bank holiday at the funfair" to American English', () => {
    const result = translator.translate('I spent the bank holiday at the funfair', 'british-to-american');
    assert.equal(result.translation.includes('carnival'), true);
  });

  test('Translate "I had a bicky then went to the chippy" to American English', () => {
    const result = translator.translate('I had a bicky then went to the chippy', 'british-to-american');
    assert.equal(result.translation.includes('cookie'), true);
    assert.equal(result.translation.includes('fish-and-chip shop'), true);
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag" to American English', () => {
    const result = translator.translate('I\'ve just got bits and bobs in my bum bag', 'british-to-american');
    assert.equal(result.translation.includes('odds and ends'), true);
    assert.equal(result.translation.includes('fanny pack'), true);
  });

  test('Translate "The car boot sale at Boxted Airfield was called off" to American English', () => {
    const result = translator.translate('The car boot sale at Boxted Airfield was called off', 'british-to-american');
    assert.equal(result.translation.includes('swap meet'), true);
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', () => {
    const result = translator.translate('Have you met Mrs Kalyani?', 'british-to-american');
    assert.equal(result.translation.includes('Mrs.'), true);
  });

  test('Translate "Prof Joyner of King\'s College, London" to American English', () => {
    const result = translator.translate('Prof Joyner of King\'s College, London', 'british-to-american');
    assert.equal(result.translation.includes('Prof.'), true);
  });

  test('Translate "Tea time is usually around 4 or 4.30" to American English', () => {
    const result = translator.translate('Tea time is usually around 4 or 4.30', 'british-to-american');
    assert.equal(result.translation.includes('4:30'), true);
  });

  // Highlight translation tests
  test('Highlight translation in "Mangoes are my favorite fruit"', () => {
    const result = translator.translate('Mangoes are my favorite fruit', 'american-to-british');
    assert.equal(result.translation.includes('<span class="highlight">favourite</span>'), true);
  });

  test('Highlight translation in "I ate yogurt for breakfast"', () => {
    const result = translator.translate('I ate yogurt for breakfast', 'american-to-british');
    assert.equal(result.translation.includes('<span class="highlight">yoghurt</span>'), true);
  });

  test('Highlight translation in "We watched the footie match for a while"', () => {
    const result = translator.translate('We watched the footie match for a while', 'british-to-american');
    assert.equal(result.translation.includes('<span class="highlight">soccer</span>'), true);
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work"', () => {
    const result = translator.translate('Paracetamol takes up to an hour to work', 'british-to-american');
    assert.equal(result.translation.includes('<span class="highlight">Tylenol</span>'), true);
  });
});
