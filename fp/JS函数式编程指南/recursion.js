function fact(num){
    if (num<=1){
      console.log(1)
      return 1;
    }else{

      var reslut = num*fact(num-1)
      console.log(num)
      return reslut;
    }
}


fact(10)




// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// 递归实现forEach
let head = (arr) => arr[0];
let tail = (arr) => arr.slice(1, arr.length)

let forEach = (arr, fn) => {
  if (arr.length > 0) {
    fn(head(arr));
    forEach(tail(arr), fn)
  }
}
forEach([1,2,3], function (x) { console.log(x) })

// 1
// 2
// 3
