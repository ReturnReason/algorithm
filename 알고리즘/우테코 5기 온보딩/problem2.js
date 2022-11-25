const problem2 = (cryptogram) => {
  const result = [];

  cryptogram.split('').forEach((crypto) => {
    if (result[result.length - 1] === crypto) {
      return result.pop();
    }
    result.push(crypto);
  });

  return result.join('');
};

module.exports = problem2;
