//柯里化(curry)

// 概念： 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

var add = function (x) {
  return function (y) {
    return x + y;
  }
}

var increment = add(1);
var addTen = add(10);

console.log(increment(2));
console.log(addTen(2));


var take = (x) => (y) => (str) => str.slice(x, y);

console.log(take(0)(7)("abcd12345asdfg"));
