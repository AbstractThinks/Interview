// httpGet('/post/2', function(json){
//   return renderPost(json);
// });


// 把整个应用里的所有 httpGet 调用都改成这样，可以传递 err 参数。
// httpGet('/post/2', function(json, err){
//   return renderPost(json, err);
// });

// httpGet('/post/2', renderPost); // renderPost 将会在 httpGet 中调用，想要多少参数都行
