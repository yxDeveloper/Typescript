/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-05 18:24:19
 * @LastEditors: Please set LastEditors
 * @Description: if else
 * @FilePath: \Typescript\code\4-语句\03-if else语句练习.ts
 */
/* 
  if else 语句练习

  根据年龄做出判断：
    1 如果年龄小于 18 岁，就打印： '回家看熊出没'
    2 否则，就打印： '玩吃鸡好爽啊'
*/

// 使用变量age来作为年龄
let age: number = 17

// if else 语句使用的重点： 找出判断条件

// 判断条件：年龄是否小于 18 岁
// age < 18 => 布尔类型
if (age < 18) {
  console.log('回家看熊出没')
} else {
  console.log('玩吃鸡好爽啊')
}

