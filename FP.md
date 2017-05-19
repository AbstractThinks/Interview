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

### 范畴学（category theory）
> 映射化简


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
