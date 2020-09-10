/*
 * @Author: yxDeveloper
 * @Date: 2020-09-04 17:59:43
 * @LastEditTime: 2020-09-10 18:01:45
 * @LastEditors: Please set LastEditors
 * @Description: interface使用
 * @FilePath: \Typescript\code\08-对象\04-接口的使用.ts
 */
// let p11: {
//   name: string
//   age: number
//   sayHi: () => void
// } = {
//   name: 'jack',
//   age: 22,
//   sayHi: () => {
//     console.log('再见杰克')
//   }
// }

// let p12: {
//   name: string
//   age: number
//   sayHi: () => void
// } = {
//   name: 'rose',
//   age: 19,
//   sayHi: function() {
//     console.log('京酱肉丝')
//   }
// }

// 创建一个接口
interface IUser {
  name: string
  age: number
  sayHi: () => void
}

// 使用接口：
let p13: IUser = {
  name: 'jack',
  age: 18,
  sayHi: () => {
    console.log('buy jack')
  }
}

let p14: IUser = {
  name: 'rose',
  age: 19,
  sayHi: function() {
    console.log('hi roce')
  }  
}