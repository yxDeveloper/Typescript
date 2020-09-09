/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:43
 * @LastEditTime: 2020-09-09 18:02:59
 * @LastEditors: Please set LastEditors
 * @Description: Object type
 * @FilePath: \Typescript\code\08-对象\02-对象的类型注解.ts
 */
// 此处的{}表示对象的类型注解
let person1: {
  name: string
  age: number
}

// 此处的{}表示ts中的对象
person1 = {
  name: '张三',
  age: 22
}