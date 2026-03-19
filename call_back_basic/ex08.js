// 다음과 같이 별을 출력하시오

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logStar = function (i) {
  for (var j = 0; j <= i; j++) {
    process.stdout.write('*');
  }
  console.log();
};

repeat(4, logStar);
