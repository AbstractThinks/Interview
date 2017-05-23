let add = function (x, y) {
  return x + y;
}

let multiply = function (x, y) {
  return x * y;
}

var a = 4;
var b = 2;
var c = 0;

var result = add(multiply(b, add(a, c)), multiply(a, b));
console.log(result)

// 结合律（assosiative）
// add(add(x, y), z) === add(x, add(y, z))
// 交换律
// add(x, y) === add(y, x)
// 分配律
// multiply(x, add(y, z)) == add(multiply(x, y), multiply(x, z))

//采用以上公式变换add(multiply(b, add(a, c)), multiply(a, b))
var result2 = add(multiply(2,multiply(a, b)), multiply(b, c));
console.log(result2)
