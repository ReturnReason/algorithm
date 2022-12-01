const isValidEmail = (email) => {
  if (email.split('@')[1] !== 'email.com') {
    throw new Error('이메일 형식이 올바르지 않습니다.');
  }
};

const isValidNickname = (nickname) => {
  const regExp = /^[ㄱ-ㅎ|가-힣]*$/;
  if (!regExp.test(nickname)) {
    throw new Error('닉네임은 한글만 사용할 수 있습니다.');
  }
};

const problem6 = (forms) => {
  const crew = {};
  const duplicateResult = [];

  forms.forEach(([email, nickname]) => {
    isValidEmail(email);
    isValidNickname(nickname);

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

module.exports = problem6;
