const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");

      const newWord = new Word('string');
      expect(newWord).have.property('word');


    });

    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      const newWord = new Word('banana');
       expect(newWord.word).to.equal('banana');

    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // expect.fail("replace with your code");
      const newWord = new Word('banana');
      const newWord2 = new Word('Apple');

      const result = newWord.removeVowels();
      const result2 = newWord2.removeVowels();

      expect(result).to.equal('bnn');
      expect(result2).to.equal('ppl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      // expect.fail("replace with your code");
      const newWord = new Word('banana');

      const result = newWord.removeConsonants();

      expect(result).to.equal('aaa');

    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      // expect.fail("replace with your code");
      const newWord = new Word('banana');
      const result = newWord.pigLatin('banana');

      expect(result).to.equal('ananabay');

    });
  });
});
