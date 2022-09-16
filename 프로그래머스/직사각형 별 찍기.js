process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let j = 0; j < b; j++) {
    console.log('*'.repeat(a));
  }
});

/* 2022.09.17 2번째 풀이*/
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
});
