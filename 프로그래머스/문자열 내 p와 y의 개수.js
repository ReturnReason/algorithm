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
