// var add = function(num1, num2){
//   return num1 + num2
// };
//
// var subtract = function(num1, num2){
//   return num1 - num2
// };
//
// var multiply = function(num1, num2){
//   return num1 * num2
// };
//
// var divide = function(num1, num2){
//   return num1 / num2
// };

var conversion = function(c, f){
  return c * 1.8 + 32
};

// 1.82
// 90.71


var num1 = parseFloat(prompt("Enter a number"));
// var num2 = parseFloat(prompt("enter another number"));
var result = conversion(Math.round(num1));
alert(result);
