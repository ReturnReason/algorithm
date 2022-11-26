const problem3 = (number) => {
  return countSamYukGu(number);
};

const countSamYukGu = (number) => {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    count += String(i)
      .split('')
      .map(Number)
      .filter((num) => {
        return num === 3 || num === 6 || num === 9;
      }).length;
  }

  return count;
};

module.exports = problem3;
