/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-17 01:51:31
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
// 这样定义是完全起作用的，比如我们下面在对象里再加入一个属性，这时候编译器就会直接给我们报错了。
// const dashen: Lady[] = [
//     { name: '老王', age: 34 },
//     { name: '老张', age: 45 ,lala:1}
// ]

// 这时候有的小伙伴就会问了，我用类进行定义可以吗？答案是可以的，比如我们定义一个Madam的类,然后用这个类来限制数组的类型也是可以的。

class Madam1 {
    name: string;
    age: number;
}
// class Madam2 {
//     name: string
//     age: number
// }

const xiaoJieJiesss: Madam1[] = [
    { name: '刘英', age: 18 },
    { name: '谢大脚', age: 28 }
]

/* TypeScript中提供了元组的概念，这个概念是JavaScript中没有的。
但是不要慌张，其实元组在开发中并不常用，也可能是我的经历还不够。
一般只在数据源是CSV这种文件的时候，会使用元组。其实你可以把元组
看成数组的一个加强，它可以更好的控制或者说规范里边的类型。 */
// const xiaojiejie  = ['dajiao','teacher',28]

// 我们先来看一个数组和这个数组注解的缺点，比如我们有一个小姐姐数组，数组中有姓名、职业和年龄，代码如下：

const xiaojiejie3 = ['dajiao', 'teacher', 28]
// 这时候把鼠标放到xiaojiejie变量上面，可以看出推断出来的类型。我们就用类型注解的形式给他作一个注解，代码如下：

const xiaojiejie4: (string | number)[] = ['dajiao', 'teacher', 28]
// 这时候你已经增加了代码注解，但是这并不能很好的限制，比如我们把代码改成下面的样子，TypeScript依然不会报错。


const xiaojiejie5: (string | number)[] = ['dajiao', 28, 'teacher']
// 我们只是简单的把数组中的位置调换了一下，但是TypeScript并不能发现问题，这时候我们需要一个更强大的类型，来解决这个问题，这就是元组。

// 元组和数组类似，但是类型注解时会不一样。

const xiaojiejie: [string, string, number] = ['dajiao', 'teacher', 28]
// 这时候我们就把数组中的每个元素类型的位置给固定住了，这就叫做元组。

/* 目前我的工作中不经常使用元组，因为如果要使用元组，完全可以使用对象的形式来代替，
但是如果你维护老系统，你会发现有一种数据源时CSV,这种文件提供的就是用逗号隔开的，
如果要严谨的编程就需要用到元组了。例如我们有这样一组由CSV提供的（注意这里只是模拟数据）。 */

/* 'dajiao','teacher',28
'liuying','teacher',18
'cuihua','teacher',25
如果数据源得到的数据时这样的，你就可以使用元组了。 */

const xiaojiejies: [string, string, number][] = [
    ['dajiao', 'teacher', 28],
    ['liuying', 'teacher', 18],
    ['cuihua', 'teacher', 25],
]

/* 接口和类型别名的区别
现在我们学了接口，也学过了类型别名，这两个语法和用处好像一样，我先表个态，确实用起来基本一样，但是也有少许的不同。

类型别名可以直接给类型，比如string，而接口必须代表对象。

比如我们的类型别名可以写出下面的代码： */

type Girl1 = string
// 但是接口就不能这样写，它必须代表的是一个对象，也就是说，你初始化girl的时候，必须写出下面的形式.

const girl = {
    name: '大脚',
    age: 18,
    bust: 94
}

/* 比如这时候老板又有了新的要求，要求尽量能看到小姐姐的腰围，但是不作强制要求，
就是可选值吗。那接口如何定义那？其实typeScript已经为我们准备好了相应的办法，
就是在:号前加一个?

比如把Girl的接口写成这样。 */

interface Girl2 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
}
// 然后我们再修改一下getResume方法，写成这样。

const getResume = (girl: Girl2) => {
    console.log(girl.name + '年龄是：' + girl.age)
    console.log(girl.name + '胸围是：' + girl.bust)
    girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
}

interface Girl3 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any
}
/* 这个的意思是，属性的名字是字符串类型，属性的值可以是任何类型。

这时候我们在对象里给一个性别,代码如下： */

const girl2: Girl3 = {
    name: '大脚',
    age: 18,
    bust: 94,
    waistline: 21,
    sex: '女'
}
// 再修改一下代码，这首就没有错误了。

const getResume1=( girl:Girl3)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是：'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是：'+girl.sex)
}
getResume1(girl2)

/* 接口里不仅可以存属性，还可以存方法，比如这时候有个say()方法，返回值是string类型。
这时候你就不要再想成简历了，你需要更面向对象化的编程，想象成一个人。 */

interface Girl4 {
    name : string;
    age  : number;
    bust : number;
    waistline ?: number;
    [propname:string]:any;
    say():string;
    say1: (num1: number,num2: number) => number
}
// const girl3: Girl4 = {
//     name: '大脚',
//     age: 18,
//     bust: 94,
//     waistline: 21,
//     sex: '女'
// }    //报错
// 加上这个say()方法后，程序马上就会报错，因为我们对象里没有say方法。那我们就要给对象一个say方法
const girl4 = {
    name:'大脚',
    age:18,
    bust:94,
    waistline:21,
    sex:'女',
    say(){
        return '欢迎光临 ，红浪漫洗浴！！'
    }
}

// 我们都知道JavaScript从ES6里是有类这个概念的，类可以和接口很好的结合，我们先来看一个例子。下面的

interface Girl {
    name : string;
    age  : number;
    bust : number;
    waistline ?: number;
    [propname:string]:any;
    say():string;
    say1?: (num1: number,num2: number) => number
}
// class XiaoJieJie41 implements Girl{

// }
// 这时候类会直接报错，所以我们需要把这个类写的完全点。

class XiaoJieJie42 implements Girl{
    name="刘英"
    age=18
    bust=90
    say(){
        return '欢迎光临 ，红浪漫洗浴！！'
    }
}
// class lala implements Girl
// class lala implements Girl

// 接口也可以用于继承的，比如你新写一个Teacher接口，继承于Girl接口。

interface Teacher extends Girl{
    teach() :string
}
// let lala: Teacher = {
    
// }   //报错

// 比如这时候老板说了，只看Teacher级别的简历，那我们需要修改getResume()方法。

const getResume5=( girl:Teacher)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是：'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是：'+girl.sex)
}
// 修改后，你就会发现下面我们调用getResume()方法的地方报错了,因为这时候传的值必须有Teach方法，

// getResume(girl)
// 修改girle对象，增加teach（）方法，这时候就不会报错了。

const girl5={
    name:'大脚',
    age:18,
    bust:94,
    waistline:21,
    sex:'女',
    say(){
        return '欢迎光临 ，红浪漫洗浴！！'
    },
    teach(){
        return '我是一个老师'
    }
}
const getResume6=( girl:Teacher)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是：'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是：'+girl.sex)
}
// getResume6(girl5)

/* 学会了接口，你还需要明白一件事，就是接口只是对我们开发的约束，在生产环境中并没有体现。
也可以说接口只是在TypeScript里帮我们作语法校验的工具，编译成正式的js代码，就不会有任何用处了。 */


