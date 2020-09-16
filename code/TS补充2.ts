/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-17 00:55:46
 * @LastEditors: Please set LastEditors
 * @Description: TS补充
 * @FilePath: \Typescript\code\TS补充2.ts
 */

// 在TypeScript静态类型分为两种，一种是基础静态类型，一种是对象类型，这两种都经常使用，非常重要
const jianXiaoJieJie: () => string = () => { return '大脚' }

const zhaXiaoJieJie: () => void = () => { }

let jiLaLa: (lala: string) => boolean = (lala: string) => {
    return true
}

enum lalala {
    la,
    zh
}
interface lala {
    la: string
    ji: string
}

let state: lalala = lalala.la

// const XiaoJieJie: String[] = ['1','2','3']
const XiaoJieJie: string[] = ['1', '2', 'true']
// error: const XiaoJieJie: string[] = ['1','2',true]


// console.log(XiaoJieJie);

// 类
class Person { }
const dajiao: Person = new Person
// 这个意思就是dajiao必须是一个Person类对应的对象才可以。

// 我们还可以定义一个函数类型，并确定返回值。代码如下：
let jianxiaojiejie: (name?: string) => string = (name = '小王') => `见到了小姐姐${name}`
// console.log(jianxiaojiejie('小张'))

/* 那我们现在总结一下对象类型可以有几种形式：

对象类型
数组类型
类类型
函数类型 */
// 这几种形式我们在TypeScript里叫做对象类型。


// 类型注解&类型断言

// 不用写类型注解的例子：
const one = 1;
const two = 2;
const three = one + two;

// 再来看一个用写类型注解的例子：
function getTotal(one, two) {
    return one + two
}

const total = getTotal(1, 2)
console.log(total);
/* 这种形式，就需要用到类型注释了，
因为这里的one和two会显示为any类型。
这时候如果你传字符串，你的业务逻辑就是错误的，
所以你必须加一个类型注解，把上面的代码写成下面的样子。 */

function getTotal1(one: number, two: number) {
    return one + two
}

const total1 = getTotal1(1, 2)
/* 这里有的一个问题是，为什么total这个变量不需要加类型注解，
因为当one和two两个变量加上注解后，TypeScript就可以自动通过类型推断，分析出变量的类型 */

// 当然TypeScript也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。

const XiaoJieJie2 = {
    name: '刘英',
    age: 18
}

// 在写TypeScript代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，
// 如果你推断就让它推断，推断不出来的时候你要进行注释。


function getTotal2(one: number, two: number) {
    return one + two
}

const total11 = getTotal2(1, 2)
// console.log(typeof(total11));

// 这时候我们写的代码其实是有一个小坑的，就是我们并没有定义getTotal的返回值类型，
// 虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码写错了，比如写程了下面这个样子。

function getTotal3(one: number, two: number) {
    return one + two + ''
}

const total12 = getTotal3(1, 2)
// console.log(total12);
// console.log(typeof(total12));


// // 这时候total的值就不是number类型了，但是不会报错。有的小伙伴这时候可能会说，
// // 可以直接给total一个类型注解，比如写成这个样子。

/* const total13 : number =getTotal3(1,2) //报错
console.log(typeof(total13)); */

/* 这样写虽然可以让编辑器报错，但是这还不是很高明的算法，因为你没有找到错误的根本，
这时错误的根本是getTotal()函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下： */
// 报错
// function getTotal4(one : number, two :number) : number{
//     return one + two + ''
// }
function getTotal4(one: number, two: number): number {
    return one + two
}

const total14 = getTotal(1, 2)
// console.log(total14);
// console.log(typeof(total14));

// 没有返回值的函数，我们就可以给他一个类型注解void，代表没有任何返回值。

function sayHello(): void {
    console.log('hello world')
}
// 如果这样定义后，你再加入任何返回值，程序都会报错。
/* function sayHello() : void{
    console.log('hello world')
    return 1
} //报错 */

// 如果一个函数是永远也执行不完的，就可以定义返回值为never，那什么样的函数是永远也执行
// 不完的那?我们先来写一个这样的函数(比如执行执行的时候，抛出了异常，这时候就无法执行完了)。
function errorFuntion(): never {
    throw new Error()
    console.log('Hello World')
}
// 还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：

function forNever(): never {
    while (true) { }
    console.log('Hello JSPang')
}
// throw new Error

// 这个坑有很多小伙伴掉下去过，就是当一个函数的参数是对象时，我们如何定义参数对象的属性类型。我先写个一般javaScript的写法。

function add({ one, two }) {
    return one + two
}

const total21 = add({ one: 1, two: 2 })   //报错
// 在浏览器中你会看到直接报错了，意思是total有可能会是任何类型，那我们要如何给这样的参数加类型注解那？最初你可能会这样写。

// function add1 ({one :number , two :number}){
//     return one + two
// }  //报错

// const total22 = add1({one:1,two:2})
// console.log(total22);

// 你在编辑器中会看到这种写法是完全错误的。那正确的写法应该是这样的
function add3({ one, two }: { one: number, two: number }): number {
    return one + two
}

const three1 = add3({ one: 1, two: 2 })
// console.log(three1);

// function add4 ({one, two}: {one: number,two: number}): number {
//     return one + two
// }

// 如果参数是对象，并且里边只有一个属性时，我们更容易写错。 错误代码如下：

// function getNumber ({one }:number){
//      return one;
//  }

//  const one = getNumber({one:1})
// 看着好像没什么问题，但实际这是有问题的，正确的代码应该时这样的。

function getNumber({ one }: { one: number }): number {
    return one;
}

const one1 = getNumber({ one: 1 })
//  function getNumber ({one}: {one: number}): number{}

// 你可以定义任意类型的数组，比如是undefined。

const undefinedArr: undefined[] = [undefined, undefined]

/* 这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。
 很简单，只要加个()，然后在里边加上|就可以了，具体看代码。 */

const arr: (number | string)[] = [1, 'string', 2]
let arr1: (string | number)[] = ['', 2, '']

// 真实的项目中数组中一定会有对象的出现。那对于这类带有对象的数组定义就稍微麻烦点了。 
// 比如现在我们要定义一个有很多小姐姐的数组，每一个小姐姐都是一个对象。这是的定义就编程了这样。

const xiaoJieJies: { name: string, age: Number }[] = [
    { name: '刘英', age: 18 },
    { name: '谢大脚', age: 28 }
]

// let xiaojiejiess: {name: string,age: number}[] = [
//     {name : '',age : 2},
//     {name : '',age : 2}
// ]
// 这种形式看起来比较麻烦，而且如果有同样类型的数组，写代码也比较麻烦，TypeScript为我们准备了一个概念，叫做类型别名(type alias)。

// 比如刚才的代码，就可以定义一个类型别名，定义别名的时候要以type关键字开始。现在定义一个Lady的别名。
// type  Lady  =  {name:string , age:Number};
// 有了这样的类型别名以后哦，就可以把上面的代码改为下面的形式了。
type Lady = { name: string, age: number }

const dashen: Lady[] = [
    { name: '老王', age: 34 },
    { name: '老张', age: 45 }
]
