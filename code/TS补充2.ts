/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-17 00:00:02
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
console.log(jianxiaojiejie('小张'))

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