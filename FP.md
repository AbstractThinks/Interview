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
