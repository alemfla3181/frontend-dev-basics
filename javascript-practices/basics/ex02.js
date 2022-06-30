/*

  변수와 자료형 (Data Type)

  [기본타입()]
*/

var u = undefined;
var i = 10;
var s = "Hello World";
var b = true;

console.log("====기본타입(primitive, 원시)===========");
console.log("u:" + typeof (u));
console.log("u:" + typeof (i));
console.log("u:" + typeof (s));
console.log("u:" + typeof (b));

console.log("====객체타입1(object type)===========")
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
console.log("i2:" + typeof (i2));
console.log("s2:" + typeof (s2));
console.log("b2:" + typeof (b2));



console.log("====객체타입2(function type)===========")
function f() {
  
}
// 원시 타입에 메소드가 호출 될 떄...
console.log("f:" + typeof(f));