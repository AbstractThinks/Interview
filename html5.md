### html5

1. <!DOCTYPE> 声明位于文档中的最前面的位置，处于 <html> 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。

2. 浏览器渲染过程[参考【浅析前端页面渲染机制】](https://mp.weixin.qq.com/s/1kQ-cyQmLfLcYiLiJ_ViwA)：

![](./dom.png)
> 1. Create/Update DOM And request css、image、js－获取html并发起css、图片、js的请求和构建dom树
> 2. Create/Update Render CSSOM－CSS文件下载完成，开始构建CSSOM
> 3. Create/Update Render CSSOM－所有CSS文件下载完成，CSSOM构建结束后，和 DOM 一起生成 Render Tree。
> 4. Layout－计算每个节点在屏幕中的位置
> 5. Painting-绘制

3. 回流（reflow）和重绘（repain）[参考【网页性能管理详解】](https://mp.weixin.qq.com/s/tZHd987KRQKjoDLfFSEYEQ)：
> 1. 重构－指改变每个元素外观时所出发的浏览器行为，比如样式发生了改变，重构不会引发页面的重新布局，不一定伴随着回流
> 2. 回流－指的是浏览器为了重新渲染页面的需要而进行的重新计算元素的几何大小和位置。（当需要操作某一块元素的时候，最好使其脱离文档流，这样就不会引起回流了（例如： position:absolute））
> 1. 引起浏览器回流`修改DOM`，`修改样式表`，`用户事件（比如鼠标悬停、页面滚动、输入框键入文字、改变窗口大小等等）`
> 2. 注： "重绘"不一定需要"回流"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"回流"，因为布局没有改变。但是，"回流"必然导致"重绘"，比如改变一个网页元素的位置，就会同时触发"回流"和"重绘"，因为布局改变了。
> 3. window.requestAnimationFrame()  //下一次重新渲染时执行
> 4. window.requestIdleCallback()    //只有当一帧的末尾有空闲时间，才会执行回调函数
```javascript
$(window).on('scroll', function() {
  window.requestAnimationFrame(scrollHandler);
});
```

4. 浏览器内核：
> 1. IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink

5. websocket: 可以让我们建立客户端到服务器端端全双工通信，这就意味着服务器端可以主动推送数据到客户端

6. webstorage-本地存储
> 1. localStorage:	持久化存储在客户端，用户不主动删除，就不会消失
> 2. sessionStorage:		存在时间是一个回话，一旦关于该回话的页面关闭就会消失
> 3. 注：cookie（4kb）是存储在浏览器端并且随浏览器的请求一起发送给服务器端

7. manifest-缓存
8. [跨域及解决方案](./cross.md)
> 1. document.domain+iframe的设置
> 2. 动态创建script
> 3. 利用iframe和location.hash
> 4. window.name实现的跨域数据传输
> 5. 使用HTML5 postMessage

```javascript
a.com/index.html中的代码：

<iframe id="ifr" src="b.com/index.html"></iframe>
<script type="text/javascript">
window.onload = function() {
    var ifr = document.getElementById('ifr');
    var targetOrigin = 'http://b.com';  // 若写成'http://b.com/c/proxy.html'效果一样
                                        // 若写成'http://c.com'就不会执行postMessage了
    ifr.contentWindow.postMessage('I was there!', targetOrigin);
};
</script>

b.com/index.html中的代码：

<script type="text/javascript">
    window.addEventListener('message', function(event){
        // 通过origin属性判断消息来源地址
        if (event.origin == 'http://a.com') {
            alert(event.data);    // 弹出"I was there!"
            alert(event.source);  // 对a.com、index.html中window对象的引用
                                  // 但由于同源策略，这里event.source不可以访问window对象
        }
    }, false);
</script>

```

9. 优化
> 1. 使用css sprites(将一个页面涉及到的所有零星图片都包含到一张大图中去)可以减少http请求数
> 2. 使用缓存
> 3. 压缩js，css文件
> 4. 使用cdn减小服务器负担
> 5. 懒加载图片

10. meta信息
```javascript
<!-- 页面描述 -->
   <meta name="description" content="不超过150个字符"/>

   <!-- 页面关键词 -->
   <meta name="keywords" content=""/>

   <!-- 网页作者 -->
   <meta name="author" content="name, email@gmail.com"/>

   <!-- 搜索引擎抓取 -->
   <meta name="robots" content="index,follow"/>

   <!-- 为移动设备添加 viewport -->
   <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
   <!-- 'width=device-width' 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 -->
　 //分界线
   <!-- iOS 设备 begin -->
   <meta name="apple-mobile-web-app-title" content="标题">
   <!-- 添加到主屏后的标题（iOS 6 新增） -->    
   <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
   <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
   <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
   <!-- 设置苹果工具栏颜色 -->
   <meta name="format-detection" content="telphone=no, email=no"/>
   <!-- 忽略页面中的数字识别为电话，忽略email识别 -->

   <!-- 启用360浏览器的极速模式(webkit) -->
   <meta name="renderer" content="webkit">
   <!-- 避免IE使用兼容模式 -->   
   <meta http-equiv="Cache-Control" content="no-siteapp" />
   <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
   <meta name="HandheldFriendly" content="true">
   <!-- 微软的老式浏览器 -->
   <meta name="MobileOptimized" content="320">
   <!-- uc强制竖屏 -->
   <meta name="screen-orientation" content="portrait">
   <!-- QQ强制竖屏 -->
   <meta name="x5-orientation" content="portrait">
   <!-- UC强制全屏 -->
   <meta name="full-screen" content="yes">
   <!-- QQ强制全屏 -->
   <meta name="x5-fullscreen" content="true">
   <!-- UC应用模式 -->
   <meta name="browsermode" content="application">
   <!-- QQ应用模式 -->
   <meta name="x5-page-mode" content="app">
   <!-- windows phone 点击无高光 -->
   <meta name="msapplication-tap-highlight" content="no">
　　 <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- 不让百度转码 // 通过百度手机打开网页时，百度可能会对你的网页进行转码，往你页面贴上它的广告-->
   <!-- iOS 图标 begin -->
   <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
   <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
   <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
   <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
   <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
   <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
   <!-- iOS 图标 end -->

   <!-- iOS 启动画面 begin -->
   <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/>
   <!-- iPad 竖屏 768 x 1004（标准分辨率） -->
   <link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png"/>
   <!-- iPad 竖屏 1536x2008（Retina） -->
   <link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png"/>
   <!-- iPad 横屏 1024x748（标准分辨率） -->
   <link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png"/>
   <!-- iPad 横屏 2048x1496（Retina） -->
   <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png"/>
   <!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
   <link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png"/>
   <!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
   <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png"/>
   <!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
   <!-- iOS 启动画面 end -->

   <!-- iOS 设备 end -->
   <meta name="msapplication-TileColor" content="#000"/>
   <!-- Windows 8 磁贴颜色 -->
   <meta name="msapplication-TileImage" content="icon.png"/>
   <!-- Windows 8 磁贴图标 -->

   <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
   <!-- 添加 RSS 订阅 -->
   <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
   <!-- 添加 favicon icon -->

   <!-- sns 社交标签 begin -->
   <!-- 参考微博API -->
   <meta property="og:type" content="类型" />
   <meta property="og:url" content="URL地址" />
   <meta property="og:title" content="标题" />
   <meta property="og:image" content="图片" />
   <meta property="og:description" content="描述" />
   <!-- sns 社交标签 end -->

```
