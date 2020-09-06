/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:27
 * @LastEditTime: 2020-09-06 19:28:38
 * @LastEditors: Please set LastEditors
 * @Description: fnuction
 * @FilePath: \Typescript\code\06-函数基础\07-函数参数练习.ts
 */
// 1 改造函数（sum），实现计算任意两个数字的和
// function sum(num1: number, num2: number) {
//   let result: number = num1 + num2
//   console.log(result)
// }
// sum(10, 20)
// sum(1, 100)

// 2 封装函数（getSum），计算任意数组中所有元素的和
//   说明：数组中的元素为数值类型
//   比如：let nums1: number[] = [1, 3, 5]
function getSum(nums: number[]) {
  let sum: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  console.log(sum)
}
// function getSum1(nums: number[]) {
//   let sum: number = 0
//   for (let i: number = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
// }

getSum([1, 3, 5])
getSum([10, 100, 1000])