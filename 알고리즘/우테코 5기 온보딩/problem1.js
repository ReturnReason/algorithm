const problem1 = (pobi, crong) => {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  let isValid = validCheckBundle([
    pobiLeftPage,
    pobiRightPage,
    crongLeftPage,
    crongRightPage,
  ]);

  if (!isValid) return -1;

  const pobiScore = Math.max(
    addSplitPageNumber(pobiLeftPage),
    addSplitPageNumber(pobiRightPage),
    multiplySplitPageNumber(pobiLeftPage),
    multiplySplitPageNumber(pobiRightPage)
  );

  const crongScore = Math.max(
    addSplitPageNumber(crongLeftPage),
    addSplitPageNumber(crongRightPage),
    multiplySplitPageNumber(crongLeftPage),
    multiplySplitPageNumber(crongRightPage)
  );

  return compareScore(pobiScore, crongScore);
};

const validCheckBundle = ([
  pobiLeftPage,
  pobiRightPage,
  crongLeftPage,
  crongRightPage,
]) => {
  if (!checkOdd(pobiLeftPage) || !checkOdd(crongLeftPage)) {
    return false;
  }

  if (!checkEven(pobiRightPage) || !checkEven(crongRightPage)) {
    return false;
  }

  if (
    isEmptyPages(pobiLeftPage, pobiRightPage) ||
    isEmptyPages(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  if (
    isOutOfRangePages(pobiLeftPage, pobiRightPage) ||
    isOutOfRangePages(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

  const pages = [pobiLeftPage, pobiRightPage, crongLeftPage, crongRightPage];
  for (let i = 0; i < pages.length; i++) {
    if (!isNumber(pages[i])) return false;
  }

  if (
    !isValidPageNumber(pobiLeftPage, pobiRightPage) ||
    !isValidPageNumber(crongLeftPage, crongRightPage)
  ) {
    return false;
  }

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

module.exports = problem1;
