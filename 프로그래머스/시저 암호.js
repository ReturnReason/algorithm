function solution(s, n) {
  var answer = '';
  s.split('').forEach((v) => {
    let c = v.charCodeAt();
    if (c >= 97 && c <= 122) {
      if (c + n >= 123) answer += String.fromCharCode(c + n - 26);
      else answer += String.fromCharCode(c + n);
    } else if (c >= 65 && c <= 90) {
      if (c + n > 90) answer += String.fromCharCode(c + n - 26);
      else answer += String.fromCharCode(c + n);
    } else if (v === ' ') {
      answer += v;
    }
  });
  return answer;
}
