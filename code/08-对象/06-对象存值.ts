/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:43
 * @LastEditTime: 2020-09-12 00:15:12
 * @LastEditors: Please set LastEditors
 * @Description: Object push set
 * @FilePath: \Typescript\code\08-对象\06-对象存值.ts
 */
interface IUser {
  name: string
  height: number
}

let jay1: IUser = {
  name: '周杰伦',
  height: 178
}

// 修改name属性的值
jay1.name = '周董'
jay1.height = 190

console.log(jay1)