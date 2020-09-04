/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:23
 * @LastEditTime: 2020-09-04 18:28:33
 * @LastEditors: Please set LastEditors
 * @Description: 变量练习
 * @FilePath: \Typescript\code\02-变量和数据类型\05-变量的练习.ts
 */
// 需求：
// 交换变量 num1 和 num2 的值（提示：借助于第三个变量）。

// 目标：
//  num1 => 2
//  num2 => 33

// 变量1：
let num1: number = 2
// 变量2：
let num2: number = 33


// 思路：
// 1 准备空杯子
let temp: number    //undefined
// 2 把你的枸杞倒入空杯子
temp = num1     //2
// 3 把老王的当归倒入你的保温杯
num1 = num2     //33
// 4 把空杯子里的枸杞倒入老王的保温杯
num2 = temp     //2
console.log(temp)
console.log(num1)
console.log(num2)