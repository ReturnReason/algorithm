const problem1 = (pobi, crong) => {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;
};

const checkOdd = (leftPage) => {
  if (leftPage % 2) {
    return true;
  }
  return false;
};

const checkEven = (rightPage) => {
  if (!(rightPage & 1)) {
    return true;
  }
  return false;
};

const isEmptyPages = ([leftPage, rightPage]) => {
  if (!leftPage || !rightPage) {
    return true;
  }
  return false;
};

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
