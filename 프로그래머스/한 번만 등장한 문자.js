function solution(s) {
  const cnt = {};
  const ret = [];
  for (let a of s) {
    if (!cnt[a]) cnt[a] = 1;
    else cnt[a]++;
  }

  for (let key in cnt) {
    if (cnt[key] === 1) ret.push(key);
  }

  return ret.sort().join('');
}
