/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-16 23:40:56
 * @LastEditors: Please set LastEditors
 * @Description: TS补充
 * @FilePath: \Typescript\code\TS补充2.ts
 */
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
