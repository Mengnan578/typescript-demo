
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





