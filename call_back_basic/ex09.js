// 반복되는 숫자를 배열에 저장하시오

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var arr = [];

var saveNumber = function (i) {
  arr[i] = i;
};

repeat(5, saveNumber);

console.log(arr);
