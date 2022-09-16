/* 2022.09.02 1번째 풀이 */
function solution(s) {
  var answer = true;
  let cntP = 0;
  let cntY = 0;

  for (let str of s) {
    if (['Y', 'y'].includes(str)) cntY++;
    else if (['P', 'p'].includes(str)) cntP++;
  }

  if (cntP == cntY) answer = true;
  else if (cntP === 0 && cntY === 0) answer = true;
  else answer = false;

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(s) {
  let cntP = 0;
  let cntY = 0;

  for (let ss of s.toUpperCase()) {
    if (ss === 'P') cntP++;
    else if (ss === 'Y') cntY++;
  }

  if (cntP === cntY) return true;
  else return false;
}
