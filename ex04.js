// 각 숫자의 제곱값을 출력하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logSquare = function (i) {
  console.log(i * i);
};

repeat(5, logSquare);
