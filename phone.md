```javascript

    1px像素解决方案
    原因：css中的1px并不等于移动设备的1px
          devicePixelRatio的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。

    点击延迟300ms
    原因： 双击放大
        解决方案： 1.禁用缩放功能  <meta name="viewport" content="width=device-width, user-scalable=no">
                   2.FastClick一个轻量级的库，FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的click事件阻止
```
