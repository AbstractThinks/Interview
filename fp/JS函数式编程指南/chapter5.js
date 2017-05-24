// 代码组合(compose)


// var compose = (f, g) => (x) => f(g(x));



let compose = (f, g) => (x) => f(g(x));


let toUpperCase = x => x.toUpperCase();
let exclaim = x => x+'!';
let shout = compose(exclaim, toUpperCase);
console.log(shout("send in the clowns"));

// 多重组合
// let demo = compose(compose(x, y), compose(m, n))


// pointfree模式：
// 永远不必说出你的数据 （一等公民函数、柯里化、组合协作起来可以实现这种模式）
// 非pointfree  : 提到了数据word
// let snakeCase = (word) => word.toLowerCase().replace(/\s+/ig, '_');

// pointfree
// let snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase());


// 范畴学（category theory）
