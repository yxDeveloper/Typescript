/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:43
 * @LastEditTime: 2020-09-09 18:23:55
 * @LastEditors: Please set LastEditors
 * @Description: Object type () => void 类型注解&类型断言
 * @FilePath: \Typescript\code\08-对象\03-对象方法的类型注解.ts
 */
// 说明：将鼠标放在以下变量名称上就可以知道类型注解
let age1: number = 14
let songName1: string = '晴天'
let isVip1: boolean = true
let person2 = {
  name: '马老师',
  age: 12
}


// ---
let p4: {
  sayHi: () => void
}

p4 = {
  sayHi : () => {
    console.log('hi')
  }
}

let p5: {
  sing: (name: string) => void
}

p5 = {
  sing: (name) => {
    console.log(`歌曲名称：${name}`)
  }
}

let p6: {
  sum: (num1: number,num2: number) => number
}

p6 = {
  sum: (num1,num2) => num1 + num2
}