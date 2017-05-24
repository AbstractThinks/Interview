// 纯函数的概念
// 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

var xs = [1, 2, 3, 4, 5];
// slice为纯函数
console.log(xs.slice(0, 3));  //[1, 2, 3]
console.log(xs.slice(0, 3));  //[1, 2, 3]
console.log(xs.slice(0, 3));  //[1, 2, 3]

//splice为不纯函数
console.log(xs.splice(0, 3)); //[1, 2, 3]
console.log(xs.splice(0, 3)); //[4, 5]
console.log(xs.splice(0, 3)); //[]

// 可缓存性
// 可移植性/自文档化(Portable/self-documenting)
// 可测试性
// 合理性(reasonable)
// 引用透明性(referential transparency)
// 兵行代码
