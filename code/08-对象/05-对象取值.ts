/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:43
 * @LastEditTime: 2020-09-12 00:14:17
 * @LastEditors: Please set LastEditors
 * @Description: Object type pull get 
 * @FilePath: \Typescript\code\08-对象\05-对象取值.ts
 */

interface IUser {
  name: string
  height: number
  sing: () => void
}
// 创建对象
let jay: IUser = {
  name: '周杰伦',
  height: 180,
  sing: () => {
    console.log('故事的小黄花。。。');
    
  }
}

// 访问对象jay的name属性
console.log(jay.name)
console.log(jay.height)

// 调用方法
jay.sing()

console.log('我叫',jay.name);

