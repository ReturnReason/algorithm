const isValidEmail = (email) => {
  if (email.split('@')[1] !== 'email.com') {
    throw new Error('이메일 형식이 올바르지 않습니다.');
  }
};

const isValidNickname = (nickname) => {
  // 한글이 아닌 경우
};

const problem6 = (forms) => {
  const crew = {};
  const duplicateResult = [];

  forms.forEach(([email, nickname]) => {
    isValidEmail(email);

    if (!crew[email]) {
      crew[email] = [];
    }

    let twoLetters = '';
    nickname.split('').forEach((nick) => {
      if (twoLetters.length === 2) {
        crew[email].push(twoLetters);
        twoLetters = twoLetters[1];
      }
      twoLetters += nick;
    });
    crew[email].push(twoLetters);

    const duplicateCount = {};
    Object.entries(crew).forEach(([_, splitNicknames]) => {
      splitNicknames.forEach((splitNickname) => {
        if (!duplicateCount[splitNickname]) {
          duplicateCount[splitNickname] = 1;
        } else {
          duplicateCount[splitNickname] += 1;
        }
      });
    });

    const duplicateNickname = [];
    Object.entries(duplicateCount).forEach(([splitNickname, count]) => {
      if (count > 1) duplicateNickname.push(splitNickname);
    });

    Object.entries(crew).forEach(([email, splitNicknames]) => {
      splitNicknames.forEach((splitNickname) => {
        if (duplicateNickname.includes(splitNickname)) {
          duplicateResult.push(email);
        }
      });
    });
  });

  return [...new Set(duplicateResult)].sort();
};

console.log(
  problem6([
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ])
);

module.exports = problem6;
