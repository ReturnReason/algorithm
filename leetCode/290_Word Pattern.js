/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splitP = pattern.split('');
  const splitS = s.split(' ');
  const PS = {};
  const SP = {};
  let ret = false;

  if (splitP.length !== splitS.length) return false;

  splitP.map((pt, i) => {
    if (!PS[pt]) {
      PS[pt] = splitS[i];
      ret = true;
    } else if (PS[pt] !== splitS[i]) ret = false;
  });

  splitS.map((st, i) => {
    if (!SP[st]) {
      SP[st] = splitP[i];
      ret = true;
    } else if (SP[st] !== splitP[i]) ret = false;
  });

  if (Object.keys(PS).length !== Object.keys(SP).length) return false;

  return ret;
};
