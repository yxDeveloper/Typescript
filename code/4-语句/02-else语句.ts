/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-05 18:22:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Typescript\code\4-语句\02-else语句.ts
 */
// 变量isVip表示：是否为会员
let isVip: boolean = false

// 需求：
//  1 如果是会员，就打印 '看完整电影'
//  2 如果不是会员，就打印 '试看5分钟'
if (isVip) {
  console.log('看完整电影')
} else {
  console.log('试看5分钟')
}