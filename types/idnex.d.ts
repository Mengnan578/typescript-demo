declare const wangfq: string;
declare const bbb: string;
declare const aaa = "aaaa";
declare let v1: string | number | boolean;
declare let v2: "男" | "女";
declare const arr1: string[];
declare const arr2: Array<string>;
declare const arr3: (string | number)[];
declare const arr4: string[] | number[];
declare const arr5: Array<string> | Array<number>;
declare const tuple1: [string, number];
declare function add(a: number, b: number, c?: number, ...res: number[]): number;
declare function identify<T>(arg: T): T;
declare const obj1: {
    id: number;
};
type ID = number | string;
type Age = number;
type infoFn = {
    name: string;
};
type user = {
    id: ID;
    name: string;
    age: Age;
    show(id: ID): void;
};
interface Point {
    id: ID;
    show(id: ID): void;
    info?: infoFn;
}
declare let someValue: any;
declare let strlength: number;
declare let strlength1: number;
declare let maybe: string | undefined;
declare let definestring: string;
