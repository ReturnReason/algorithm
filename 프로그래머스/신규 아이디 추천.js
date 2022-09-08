function solution(new_id) {
  var answer = '';

  const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let user_id = '';

  for (let id of new_id.toLowerCase()) {
    if (list.includes(id)) {
      user_id += id;
    }
  }

  let idx = 0;
  let prev = 0;
  let _2nd = '';
  for (let id of user_id) {
    if (id === '.') {
      prev++;
    } else if (prev > 0 && id !== '.') {
      prev = 0;
      _2nd += '.';
      _2nd += id;
    } else {
      _2nd += id;
    }
  }

  if (_2nd[0] === '.') {
    _2nd = [..._2nd].splice(1).join('');
  } else if (_2nd[_2nd.lenght - 1] === '.') {
    _2nd = [..._2nd].splice(-1).join('');
  }

  if (_2nd === '') _2nd = 'a';

  if (_2nd.length >= 16) _2nd = [..._2nd].splice(0, 15).join('');
  if (_2nd[_2nd.length - 1] === '.') _2nd = [..._2nd].splice(0, _2nd.length - 1).join('');

  if (_2nd.length <= 2) {
    let word = _2nd[_2nd.length - 1];
    while (_2nd.length < 3) {
      _2nd += word;
    }
  }

  answer = _2nd;
  return answer;
}
