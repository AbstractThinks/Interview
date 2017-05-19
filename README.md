# 前端面试
(http://lzw.me/pages/ecmascript/)
(http://www.infoq.com/cn/ECMAScript)
(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)


[html5](./html5.md)


[css](./css.md)

[http](./internet.md)

[javascript](./javascript.md)

```javascript
	js dom操作及数据操作 方法
		getElementById(id)
		getElementsByTagName()
		appendChild(node)
		removeChild(node)
		replaceChild()
		insertChild()
		createElement()
		createTextNode()
		getAttribute()
		setAttribute()
		map()方法：若这个回调函数有返回值，map()方法会产生一个新数组，这个新数组由原数组元素对应的回调函数的返回值构成。若没有返回值，则新数组的所有元素为undefined。
    forEach()方法：仅仅为每个数组元素执行回调函数。

```


[ng](./ng.md)


[vue](./vue.md)


[reactjs](./react.md)


nodejs
```javascript
	1.什么是错误优先的回调函数？
	错误优先的回调函数用于传递错误和数据。第一个参数始终应该是一个错误对象， 用于检查程序是否发生了错误。其余的参数用于传递数据。例如：
	fs.readFile(filePath, function(err, data) {  
		if (err) {
			//handle the error
		}
		// use the data object
	});
```
模块化

[算法](./algorithm.md)

[设计模式](./design.md)

[移动端](./phone.md)

[响应式编程](./RP.md)

[函数式编程](./FP.md)

[ESlint](./ESlint.md)

[react native]()

[Kotlin]()

[Electron]()
