/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-05 18:30:38
 * @LastEditors: Please set LastEditors
 * @Description: 三元运算练习
 * @FilePath: \Typescript\code\4-语句\05-三元运算符练习.ts
 */
let age: number = 16

// if...else 的实现：
if (age < 18) {
  console.log('回家看熊出没')
} else {
  console.log('玩吃鸡好爽啊')
}

// 需求：使用 三元运算符 实现以上功能
let result: string = age < 18 ? '回家看熊出没' : '玩吃鸡好爽啊'
console.log(result)