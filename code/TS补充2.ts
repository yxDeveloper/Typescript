/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-17 00:06:25
 * @LastEditors: Please set LastEditors
 * @Description: TS补充
 * @FilePath: \Typescript\code\TS补充2.ts
 */

// 在TypeScript静态类型分为两种，一种是基础静态类型，一种是对象类型，这两种都经常使用，非常重要
const jianXiaoJieJie : ()=> string =()=>{return '大脚'}

const zhaXiaoJieJie: () => void = () => {}

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
const XiaoJieJie: string[] = ['1','2','true']
// error: const XiaoJieJie: string[] = ['1','2',true]


// console.log(XiaoJieJie);

// 类
class Person {}
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
function getTotal(one , two){
    return one + two
}

const total = getTotal(1,2)
console.log(total);
/* 这种形式，就需要用到类型注释了，
因为这里的one和two会显示为any类型。
这时候如果你传字符串，你的业务逻辑就是错误的，
所以你必须加一个类型注解，把上面的代码写成下面的样子。 */

function getTotal1(one : number, two :number){
    return one + two
}

const total1 = getTotal1(1,2)
/* 这里有的一个问题是，为什么total这个变量不需要加类型注解，
因为当one和two两个变量加上注解后，TypeScript就可以自动通过类型推断，分析出变量的类型 */

// 当然TypeScript也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。

const XiaoJieJie2 = {
    name:'刘英',
    age:18
}

// 在写TypeScript代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，
// 如果你推断就让它推断，推断不出来的时候你要进行注释。