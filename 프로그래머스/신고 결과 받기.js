function solution(id_list, report, k) {
  var answer = [];
  answer = Array(id_list.length).fill(0);

  const userList = {};

  id_list.forEach((v) => {
    userList[v] = { reportCount: 0, reportList: [] };
  });

  report.forEach((v) => {
    let list = v.split(' ');
    let from = list[0]; // 신고한
    let to = list[1]; // 신고당한

    // 이전에 신고했었는지 확인
    if (userList[from].reportList.includes(to) === false) {
      userList[from].reportList.push(to);
      userList[to].reportCount++;
    }
  });

  const kList = []; // k번 이상 신고당한 리스트

  for (let user in userList) {
    if (userList[user].reportCount >= k) {
      kList.push(user);
    }
  }

  if (kList.length > 0) {
    let userNumber = 0;
    for (let i = 0; i < kList.length; i++) {
      for (let user in userList) {
        if (userList[user].reportList.includes(kList[i])) {
          answer[userNumber]++;
        }
        userNumber++;
      }
      userNumber = 0;
    }
  }

  return answer;
}
