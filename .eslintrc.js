module.exports = {
    "env": {
        // "es6": true,
        // "node": true,
        "browser": true
        
    },
    "extends": "eslint:recommended",
    "rules": {
        "use-isnan": 2,   //判断一个变量是否是 NaN 的时候，一定要用 isNaN 方法。NaN 和任何变量作比较，都会得到 false
        "no-debugger": 2, // 程序中不能出现debugger
        "no-dupe-args": 2, // 函数的参数名称不能重复
        "no-dupe-keys": 2, // 对象的属性名称不能重复
        "no-duplicate-case": 2, // switch的case不能重复
        "no-constant-condition":2, // 禁止在条件中使用常量表达式  if (false) {...}
        "eqeqeq": [2, "always"], //禁用 == 和 != 用 === 和 !== 代替
        "no-undef": 2, //禁用未声明的变量
        "no-cond-assign": [2, "always"] //if, while等条件中不允许使用“=”


    }
};