### [函数式编程（Functional programming）](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
> 准则：函数不受外部变量影响，不依赖于外部变量，也不改变外部变量的值
> 1. 可缓存性（cacheable）

```javascript
var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

```
> 2. 可移植性／自文档化（Portable / Self-Documenting）
> 3. 可测试性（Testable）
> 4. 合理性（Reasonable）

### 纯函数
> 对于相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态

```javascript
var arr = [1, 2, 3, 4, 5];
xs.slice(0, 3); //[1, 2, 3]
xs.slice(0, 3); //[1, 2, 3]
// slice 为纯函数

xs.splice(0, 3);    //[1, 2, 3]
xs.splice(0, 3);    //[4, 5]
xs.splice(0, 3);    //[]
//  splice 为非纯函数

```

### 柯里化（curry）
> 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

```javascript
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3
addTen(2);
// 12
```

### 代码组合－－范畴学（category theory）
> 使用纯函数和以及将它柯里化后
> h(g(f(x)))  //包菜式代码

```javascript

var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    }
}
//或者
var compose = (f, g) => (x => f(g(x)))

var add1 = x => x + 1;
var mul5 = x => x*5;
compose(mul5, add1)(2); //15
//compose(fn...)(val...)
```


### 声明式代码（）

```javascript
// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}


// 声明式
var makes = cars.map(function(car){ return car.make; });

```

```javascript
// 命令式
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};

// 声明式
var authenticate = compose(logIn, toUser);

```

### Hindley-Milner


### 特百惠

### Monad

### Applicative Functor


### 实践
> 1. 禁用var/let，所有东西都用const定义，也就是说无变量，强制immutable。
> 2. 禁用分号，也就是不让“顺序执行”，解除过程式编程范式。你不是不爱写分号吗，这次彻底不需要写了
> 3. 禁用if/else，但允许用条件表达式condition ? expr1 : expr2。
> 4. 禁用for/while/do-while。
> 5. 禁用prototype和this来解除JS中的面向对象编程范式。
> 6. 禁用function和return关键字，仅用lambda表达式来编程（JS里叫箭头函数）。
> 7. 禁用多参数函数，只允许使用单个参数，相当于强行curry化

```javascript
for (var i = 0; i < arr.length; i++) {
    // ...
}

 =>

function loop_on_array(arr, body, i) {
  if (i < arr.length) {
    body(arr[i])
    loop_on_array(arr, body, i+1)
  }
}
// 使用了function定义：这个最简单，改成箭头函数就行了
// 使用了多个参数：这个可以简单的通过curry化来解决
// 使用了if/else：这个可以简单的通过条件表达式来解决
// 使用了顺序执行，也就是body(i)和loop(arr, body, i + 1)这两句代码使用了顺序执行

 =>




```
### map实践
```javascript
const map = f => arr => arr.length === 0? [] : [f(arr[0])].concat(map(f)(arr.slice(1)))

```
### sum实践
```javascript
const sum = accumulator => ([x, ...xs]) => x === undefined ? accumulator : sum(x + accumulator)(xs)
```

### 递归

```javascript
function sum(x) {
    if (x === 1) {
        return 1;
    }
    return x + sum(--x);
}

sum(5)
(5 + sum(4))
(5 + (4 + sum(3)))
(5 + (4 + (3 + sum(2))))
(5 + (4 + (3 + (2 + sum(1)))))
(5 + (4 + (3 + (2 + 1))))
(5 + (4 + (3 + 3)))
(5 + (4 + 6))
(5 + 10)
15

// 尾递归优化

function sum(x, total) {
    if (x === 1) {
        return x + total;
    }
    return sum(x - 1, x + total);
}

sum(5, 0)
sum(4, 5)
sum(3, 9)
sum(2, 12)
sum(1, 14)
15

```

> ES6的尾调用优化只在严格模式下开启，正常模式是无效的。这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
> 1. arguments：返回调用时函数的参数。
> 2. func.caller：返回调用当前函数的那个函数。
>
> 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
