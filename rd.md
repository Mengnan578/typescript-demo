# Ts代码学习

## 快速入门
ts 的安装
``` npm i typescript --save-dev```
检查ts是够安装成功
``` npm tsc ``` 

使用上的小问题
1. 默认情况ts会假设当前在dom环境；
2. 如果代码中没有模块化语句，默认代码是全局执行的，所以变量是全局变量，会有变量名冲突的风险，会爆如下错误；要最简单的解决就是加上模块化代码
![alt text](./img/image1.png)
3. ts默认编译的目标代码是ES3
### tsconfig.js
全局安装   ``` npm i -g ts-node ```,可以在内存编译成js；
    命令行执行：``` ts-node + 对应文件路径 ```

全局安装   ``` npm i nodemon -D ```, 可以帮助你监听文件，每次保存文件就可以帮你执行一些命令
    script 脚本添加 ``` nodemon --exec ts-node src/index.ts```

可以使用 ``` ts --init 生成ts配置文件 ```

某一个函数点进去会进入vscode默认的ts类型，如果需要进入自己本地node_module类型，需要配置一下,方法如下：```cotl + shift + p``` 打开命令行，输入 ```select typescript```

### ts常见类型
js的基础数据类型ts都有一一对应的，同时增加了一下类型
```javascript
// 字面量(必须是const 定义的字符串)
const aaa = "aaaa";

// 联合类型
let v1 : string | number | boolean;
// 字面量加联合类型
let v2 : "男"| "女" = "男"

// 数组类型
const arr1 : string[] = ["a","b"]
const arr2 : Array<string> = ["a","b"];
// 联合类型加数组,数组中每一项既可以是数字，也可以是字符串
const arr3 : (string | number)[] = [1,2,"3"]
// 这种写法表示数组中每一个元素必须统一是数组或者字符串
const arr4 : string[] | number [] = [1.2]
const arr5 : Array<string> | Array<number> = [1,2,3]

// 元组类型(类型更强的数组)
const tuple1: [string,number] = ["1",2];

// 函数,可以加一个问号表示参数非必有，如果参数有默认值，本身就是可选的
function add(a: number,b: number,c?: number, ...res:number[]): number{
    return a + b;
}

// 泛型,就是类型占位符
function identify<T>(arg: T): T{
    return arg;
}
identify<string>("wangfq");
identify("wangfq") // 类型推断
identify(123) // 类型推断

// 对象字面量
const obj1 = {
    id: 1,

}

// 类型别名
type ID = number | string
type Age = number;
type infoFn = { name: string}
type user = {
    id : ID,
    name: string,
    age: Age,
    show(id: ID):void,
}

// 接口（接口是面向对面的概念，所以一般是用来定义对象类型）
interface Point {
    id: ID,
    show(id: ID):void,
    info?: infoFn
}


// 联合类型 ｜

// 交叉类型 & 就是不同类型的合并

// 类型断言，ts会根据上下文进行推测，如果推测不出来，就会报错；如果开发者确定了某一个类型
// 类型断言可以告诉ts编辑器这个类型没问题；
let someValue: any = "this is string";
let strlength = (someValue as string).length;
let strlength1 = (<string>someValue).length;

// 非空断言，当你确定某一个值不是null或者undifine，可以直接使用非空断言
let maybe : string  | undefined = "hellow";
let definestring = maybe!;
```
