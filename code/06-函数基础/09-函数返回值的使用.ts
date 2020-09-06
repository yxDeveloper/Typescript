/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:27
 * @LastEditTime: 2020-09-06 19:35:16
 * @LastEditors: Please set LastEditors
 * @Description: return 
 * @FilePath: \Typescript\code\06-函数基础\09-函数返回值的使用.ts
 */
function fn(): number {
  return 18
}

// let result: number = fn()
// // let result: number = 18
// // 进行其他计算
// console.log(result * 10)
// console.log(result / 2)
// let result: number = fn()

console.log(fn() * 10)
console.log(fn() / 2)