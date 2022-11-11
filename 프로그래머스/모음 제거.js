function solution(my_string) {
  const r = /[a,e,i,o,u]/g;
  return my_string.replace(r, '');
}
