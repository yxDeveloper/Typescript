/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:23
 * @LastEditTime: 2020-09-04 18:51:40
 * @LastEditors: Please set LastEditors
 * @Description: 变量在声明和赋值时不可以存储其他类型的数据（得先转换，但是可以赋为undefined和null）
 * @FilePath: \Typescript\code\02-变量和数据类型\10-数据类型小结.ts
 */
// 判断以下代码是否正确：

/* // 错误的
let age: number = '18'

// 错误的
let isStudying: boolean = 'true' */

let state: string = null
let isOk: boolean = undefined
let number: number = null
let u: undefined = null
let n: null = undefined