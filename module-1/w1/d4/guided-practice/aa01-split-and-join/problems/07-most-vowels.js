

/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".

understand the problem
  input: "what a wonderful life"
  output: "wonderful"
  * how do i get from input to my output

make a plan
  1. split the string into an array to get all the words separated
  2. create a tracker to track the most vowel count
  3. variable to track the current word with the most vowel
  4. declare a variable that holds the vowels
  5. we have to iterate through array of words
    a. create a vowel counter variable
    b. iterate through the word to get the letters
      a. we need to check if the letter is a vowel
        a. if it is; increment out vowel counter
      b. as we are about to renter the outer loop well check
      c. if vowel counter is greater than our highest vowel counter var
      d. if it is reassign the highest count and the most vowel word
  6. return the word with most vowel

execute
refactor
*/

function mostVowels(sentence) {
  let vowels ='aeiouAEIOU';
  let words = sentence.split(' ');// [ 'what', 'a', 'wonderful', 'life' ]
  let highestVowelCount = 0;
  let highestVowelWord = '';

  for(let i = 0; i < words.length; i++){
    let word = words[i];
    let count = 0;

    for(let j = 0; j < word.length; j++){
      let letter = word[j];


      if(vowels.includes(letter)){
        count++;
      };
      // for(let x = 0; x < vowels.length; x++){
      //   let vowel = vowels[x];
      //   if(vowel === letter) count++;
      // }
    };

    // console.log(word,count);
    if(count > highestVowelCount) {
      highestVowelCount = count;
      highestVowelWord = word;
    }
    // console.log(highestVowelCount, highestVowelWord);
  }

  return highestVowelWord;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("the quick brown fox jumps")); // "quick"
console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
