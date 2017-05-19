

  订阅模式[observer](./observer.md)
```javascript
  
  var shoeObj = {};   // 定义发布者
  shoeObj.list = [];  // 缓存列表 存放订阅者回调函数
  
  // 增加订阅者
  shoeObj.listen = function(fn) {
    shoeObj.list.push(fn);    //订阅消息添加到缓存列表
  }
  
  // 发布消息
  sheoeObj.trigger = function() {
    for (var i = 0, fn; fn = this.list[i++];) {
      fn.apply(this, arguments);
    }
  }

  // A订阅
  shoeObj.listen(function (color, size) {
    console.log("颜色是："+color);
  })

  // B订阅
  shoeObj.listen(function (color, size) {
    console.log("颜色是："+color);
  })

  shoeObj.trigger("红色",40);
  shoeObj.trigger("黑色",42);

  //  执行结果
  //  颜色是红色
  //  颜色是红色
  //  颜色是黑色
  //  颜色是黑色


```
  工厂模式
