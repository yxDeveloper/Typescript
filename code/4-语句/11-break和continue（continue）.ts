/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-06 18:42:22
 * @LastEditors: Please set LastEditors
 * @Description: continue
 * @FilePath: \Typescript\code\4-语句\11-break和continue（continue）.ts
 */
// 买了 5 个包子，吃包子。 正在吃第n个包子

// continue
for(let i: number = 1; i <= 5; i++) {
  if(i === 3) {
    continue
  }
  console.log('正在吃第' + i + '个包子')
}