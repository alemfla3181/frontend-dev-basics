/*
  변수의 범위 (Scope)
  1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다. (Static, Lexical Scope)
  2. ES6 이전 (<=ES5)
    - 자바와 같이 블록({})범위를 지원하지 못했다
    - 함수 범위를 지원 했다.
    - 함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가진다.
    - 만약에 var 키워드 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다
  3. ES6 이후 (ES6)
*/
var i = 10;
var f = function () {
  var i = 20;
  j = 100;
  console.log(i);
  i = j - 1;

}

f();
console.log(i);
console.log(j);

console.log("== var 키워드는 함수 ")