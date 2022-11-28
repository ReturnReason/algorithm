const UPPER_ALPHABET_START = 65;
const UPPER_ALPHABET_END = 90;
const LOWER_ALPHABET_START = 97;
const LOWER_ALPHABET_END = 122;

const alphabet = [];
for (let i = UPPER_ALPHABET_START; i <= UPPER_ALPHABET_END; i++) {
  alphabet.push(String.fromCharCode(i));
}

const reverseAlphabet = [...alphabet].reverse();

const problem4 = (word) => {
  return word
    .split('')
    .map((letter) => {
      const letterCode = letter.charCodeAt();

      if (
        letterCode >= UPPER_ALPHABET_START &&
        letterCode <= UPPER_ALPHABET_END
      ) {
        return changeReverseUpperAlphabet(letterCode);
      }

      if (
        letterCode >= LOWER_ALPHABET_START &&
        letterCode <= LOWER_ALPHABET_END
      ) {
        return changeReverseLowerAlphabet(letterCode);
      }

      return letter;
    })
    .join('');
};

const changeReverseUpperAlphabet = (letterCode) => {
  return reverseAlphabet[letterCode - UPPER_ALPHABET_START];
};

const changeReverseLowerAlphabet = (letterCode) => {
  return reverseAlphabet[letterCode - LOWER_ALPHABET_START].toLowerCase();
};

console.log(problem4('I love you'));

module.exports = problem4;
