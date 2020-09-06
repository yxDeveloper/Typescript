/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-06 18:45:37
 * @LastEditors: Please set LastEditors
 * @Description: break
 * @FilePath: \Typescript\code\4-语句\12-break和continue（break）.ts
 */
// 买了 5 个包子，吃包子。 正在吃第n个包子

// break
// for (let i: number = 1; i <= 5; i++) {
//   if (i === 5) {
//     break
//   }
//   console.log('正在吃第' + i + '个包子')
// }

for(let i: number = 1; i <= 5; i++) {
  if(i === 4) {
    break
  }
  console.log('正在吃第' + i + '个包子')
}