const problem1 = (pobi, crong) => {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;
};

// 예외처리 번들
const validCheckBundle = ([
  pobiLeftPage,
  pobiRightPage,
  crongLeftPage,
  crongRightPage,
]) => {
  // 왼쪽 페이지가 홀수인지 확인한다.
  if (!checkOdd(pobiLeftPage) || !checkOdd(crongLeftPage)) {
    return false;
  }

  // 오른쪽 페이지가 짝수인지 확인한다.
  if (!checkEven(pobiRightPage) || !checkEven(crongRightPage)) {
    return false;
  }

  // 페이지가 비어있는지 확인한다.
  if (
    isEmptyPages(pobiLeftPage, pobiRightPage) ||
    isEmptyPages(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  // 페이지가 범위를 벗어났는지 확인한다.
  if (
    isOutOfRangePages(pobiLeftPage, pobiRightPage) ||
    isOutOfRangePages(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  // 숫자인지 확인한다
  const pages = [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage];
  for (let i = 0; i < pages.length; i++) {
    if (!isNumber(pages[i])) return false;
  }

  // 오른쪽 페이지가 왼쪽 페이지 숫자보다 큰지 확인한다.
  if (
    !isValidPageNumber(pobiLeftPage, pobiRightPage) ||
    !isValidPageNumber(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  // 페이지의 차이가 1을 초과하는지 확인한다.
  if (
    !isValidDifferences(pobiLeftPage, pobiRightPage) ||
    !isValidDifferences(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  return true;
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

const isValidPageNumber = (leftpage, rightPage) => {
  if (leftpage < rightPage) {
    return true;
  }
  return false;
};

const isValidDifferences = (leftPage, rightPage) => {
  if (rightPage - leftPage > 1) {
    return false;
  }
  return true;
};

// 정상 페이지인 경우 사용될 함수
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
// console.log(problem1([0, 98], [197, 198])); // -1
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
