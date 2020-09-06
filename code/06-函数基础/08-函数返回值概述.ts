/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:27
 * @LastEditTime: 2020-09-06 19:33:53
 * @LastEditors: Please set LastEditors
 * @Description: return
 * @FilePath: \Typescript\code\06-函数基础\08-函数返回值概述.ts
 */
function getSum1(nums: number[]): number {
  let sum: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  // console.log(sum)
  return sum
}
// function getSum1(nums: number[]): number {
//   let sum: number = 0
//   for(let i: number = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//   return sum
// }

let result: number = getSum1([1, 3, 5]) + getSum1([10, 100, 1000])
console.log(result)
