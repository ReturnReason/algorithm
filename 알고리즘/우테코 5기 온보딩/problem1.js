const problem1 = (pobi, crong) => {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  // 반환값이 false이면 결과 -1로 리턴하기
};

// 예외처리
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

const isEmptyPages = (leftPage, rightPage) => {
  if (!leftPage || !rightPage) {
    return true;
  }
  return false;
};

const isNumber = (page) => {
  return Number.isNaN(Number(page)) ? false : true;
};

const isOutOfRangePages = (leftPage, rightPage) => {
  if (leftPage <= 1 || leftPage > 400 || rightPage >= 400 || rightPage < 1) {
    return true;
  }
  return false;
};

//

const addSplitPageNumber = (page) => {
  const toStringPage = String(page);
  return toStringPage
    .split('')
    .map(Number)
    .reduce((prev, current) => prev + current);
};

const multiplySplitPageNumber = (page) => {
  const toStringPage = String(page);
  return toStringPage
    .split('')
    .map(Number)
    .reduce((prev, current) => prev * current);
};

const isValidDifferences = (leftPage, rightPage) => {
  if (rightPage - leftPage > 1) {
    return false;
  }
  return true;
};

const compareLargerNumber = (addSplitNumber, multiplySplitNumber) => {
  if (addSplitNumber > multiplySplitNumber) {
    return addSplitNumber;
  }
  return multiplySplitNumber;
};

const compareScore = (pobiNumber, crongNumber) => {
  if (pobiNumber > crongNumber) {
    return 1;
  }
  if (pobiNumber < crongNumber) {
    return 2;
  }
  return 0;
};

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
