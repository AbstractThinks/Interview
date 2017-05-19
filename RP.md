### 响应式编程(`Reactive Programming`)

[珠宝图amb()](http://rxmarbles.com/#delay)
[RxJS-Chinese](https://www.gitbook.com/book/buctwbzs/rxjs/details)
[rxjs基础教程](https://github.com/RxJS-CN/rxjs5-ultimate-cn)
> 1. Observable: 可观察的数据序列.
> 2. Observer: 观察者实例，用来决定何时观察指定数据.
> 3. Subscription: 观察数据序列返回订阅实例.
> 4. Operators: Observable的操作方法，包括转换数据序列，过滤等，所有的Operators方法接受的参数是上一次发送的数据变更的值，而方法返回值我们称之为发射新数据变更.
> 5. Subject: 被观察对象.
> 6. Schedulers: 控制调度并发，即当Observable接受Subject的变更响应时，可以通过scheduler设置响应方式，目前内置的响应可以调用Object.keys(Rx.Subject)查看。

##### 操作符
1. create
> Rx.Observable.create([fn])

```javascript
Rx.Observable.create(observer => {
    observer.next( 1 );
})
```

2. range
> Rx.Observable.range([start],[count])

```javascript
let stream$ = Rx.Observable.range(1,3)

// 发出 1,2,3
```
2. map
> map是用的最多的序列转化操作符。它需要一个Observable和一个函数，并且把函数应用于源Observable的每一个值。它返回一个新的转化后值的Observable。

```javascript
```

3. interval
> Rx.Observable.interval([ms])  按固定的时间间隔提供值

```javascript
Rx.Observable.interval(100)
// 因为这个操作符会不停地生成值，所以倾向于和 take() 操作符一起使用，这样可以在调用它之前限制生成值的数量，就像这样：
Rx.Observable.interval(1000).take(3)
// 生成 1,2,3
```

3. timer
> Rx.Observable.timer([initial delay],[thereafter])

```javascript
let stream$ = Rx.Observable.timer(1000);
stream$.subscribe(data => console.log(data));
// 1秒后生成0


let moreThanOne$ = Rx.Observable.timer(2000, 500).take(3);
moreThanOne$.subscribe(data => console.log('timer with args', data));
// 2秒后生成0，然后再500毫秒后生成1，然后再500毫秒生成2
```

3. delay
> delay() 操作符只是简单地延迟每个要发出的值

```javascript
var start = new Date();
let stream$ = Rx.Observable.interval(500).take(3);

stream$
.delay(300)
.subscribe((x) => {
    console.log('val',x);
    console.log( new Date() - start );
})

// 800毫秒左右后输出 0 , 1300毫秒左右后输出1, 1800毫秒左后后输出2
```

3. debounceTime
> debounceTime() 操作符会告诉你：我只会以一定的时间间隔发出数据，而不会一直发出数据。
>
> Debounce 是一个已知的概念，特别是当你敲击键盘的时候。就像是在说，我们不在乎你的每次敲击键盘，但是一旦你停止打字后的一段时间是我们所关心的。一个普通的 auto complete (自动完成/智能提示) 就应该在这个时候开始启动了。如果说你的用户停止打字已经有x毫秒了，通常这意味着我们应该执行一次 ajax 调用并取回结果。

```javascript
const input = document.getElementById('input');

const example = Rx.Observable
  .fromEvent(input, 'keyup')
  .map(i => i.currentTarget.value);

// 在两次敲击键盘事件之间，有0.5秒的等待时间，如果时间小于0.5秒则丢弃前一个敲击键盘事件
const debouncedInput = example.debounceTime(500);

const subscribe = debouncedInput.subscribe(val => {
  console.log(`Debounced Input: ${val}`);
});
```

1. of
> 创建类型的操作符创建了 observable

```javascript
let stream$ = Rx.Observable.of(1, 2, 3, 4, 5)
```
1. from
> from()替代fromArray()、from()、fromPromise() 等等

```javascript
Rx.Observable.from([2,3,4,5])
Rx.Observable.from(new Promise(resolve, reject) => {
  // 异步操作
  resolve( data )
})
```

1. to
> 离开美妙的 observables 世界并回到更原始的状态

```javascript
let promise = Rx.Observable.of(1,2).toPromise();
promise.then(data => console.log('Promise', data));
```

2. do
> 调试 Observable

```javascript
let stream$ = Rx.Observable.of(1, 2, 3).do((value) => {console.log('emits every value')})
```
3. filter
> 过滤操作符，可以阻止某些值被发出

```javascript
let stream$ = Rx.Observable.of(1,2,3,4,5).do((value) => {
  console.log('do',value)
})
.filter((value) => {
  return value % 2 === 0;
})

stream$.subscribe((value) => {
  console.log('value', value)
})

//  do: 1,do : 2, do : 3, do : 4, do: 5
// value : 2, 4
```

1. combineLatest
> Rx.Observable.combineLatest([ source_1, ...  source_n])

```javascript
let source1 = Rx.Observable.interval(100)
.map( val => "source1 " + val ).take(5);

let source2 = Rx.Observable.interval(50)
.map( val => "source2 " + val ).take(2);

let stream$ = Rx.Observable.combineLatest(
    source1,
    source2
);

stream$.subscribe(data => console.log(data));

// 发出 source1: 0, source2 : 0 |  source1 : 0, source2 : 1 | source1 : 1, source2 : 1, 等等
// 业务场景: 是当你对每个 source 的最新值感兴趣，而对过往的值不感兴趣，当然你要有一个以上想要组合的 source 。
```

1. concat
> Rx.Observable([ source_1,... sournce_n ])

```javascript
let source1 = Rx.Observable.interval(100)
.map( val => "source1 " + val ).take(5);

let source2 = Rx.Observable.interval(50)
.map( val => "source2 " + val ).take(2);


let stream$ = Rx.Observable.concat(
    source1,
    source2
);

stream$.subscribe( data => console.log('Concat ' + data));

// source1 : 0, source1 : 1, source1 : 2, source1 : 3, source1 : 4
// source2 : 0, source2 : 1
```

1. merge
> merge操作符可以将多个流合并成一个。

```javascript
let merged$ = Rx.Observable.merge(
    Rx.Observable.of(1).delay(500),
    Rx.Observable.of(3,2,5)
)

let observer = {
    next : data => console.log(data)
}

merged$.subscribe(observer);
```

1. zip
>

```javascript
let stream$ = Rx.Observable.zip(
    Promise.resolve(1),
    Rx.Observable.of(2,3,4),
    Rx.Observable.of(7)
);


stream$.subscribe(observer);
// 1,2,7
// 业务场景: 如果你真正关心不同 sources 在同一个位置所发出值的区别，假设所有 sources 的第2个响应值，那么你需要 zip() 操作符
```

1. buffer
> buffer([breakObservable])

```javascript
let breakWhen$ = Rx.Observable.timer(1000);

let stream$ = Rx.Observable.interval(200)
.buffer( breakWhen$ );

stream$.subscribe((data) => console.log( 'values',data ));
//values 0,1,2,3
// 业务场景: Auto complete(自动完成/智能提示) - 使用 buffer() 操作符进行处理的最显著的例子就是 auto complete
```

1. bufferTime
> bufferTime([ms]) 作用是记录在该时间段内发生的所有事情并输出所有的值。下面的示例是以1秒为时间片段记录输入的所有活动事件。

```javascript
let input = document.getElementById('example');
let input$  = Rx.Observable.fromEvent( input, 'input' )
.map( ev => ev.key)
.bufferTime(1000);

input$.subscribe((data) => console.log('all inputs in 1 sec', data));
// 业务场景: 如果你想要记录该网站上的其它用户正在做什么，并希望重播他们曾经做过的所有交互，或者当他们开始输入，你希望通过 socket 发送此信息的话，那么上面的示例会非常有用。最后一个是当下的标准功能，你看见一个人在另一个终端上打字。所以确实有这样的业务案例。
```
