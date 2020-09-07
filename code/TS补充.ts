/*
 * @Author: your name
 * @Date: 2020-09-07 18:31:49
 * @LastEditTime: 2020-09-07 19:17:39
 * @LastEditors: Please set LastEditors
 * @Description: TS笔记补充
 * @FilePath: \Typescript\code\TS补充.ts
 */

// 1.变量类型


// number string boolean undefined null void enum Array Tuple any
// number string boolean enum枚举 Array Tuple元组 undefined null void空 any任意

// undefined:
// let age: number
// console.log(age) //undefined

// number
// NaN Infinity -Infinity

// enum

// 数字枚举
// enum REN{ nan , nv ,yao}
// console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
// 字符串枚举
// enum REN{
//     nan = '男',
//     nv = '女',
//     yao= '妖'
// }
// console.log(REN.yao)  //返回了妖 这个字

// any
// var t:any =10 
// t = "jspang"
// t = true
// console.log(t)

// null 与 Undefined 类似，都代表空。Null 代表是引用类型为空。


// 2. Typescript 的函数

// function searchXiaoJieJie(age:number):string{
//     return '找到了'+age+'岁的小姐姐' 
// }
// var age:number = 18
// var result:string = searchXiaoJieJie(age)
// console.log(result)

// 参数？（可选可不选）：类型 = 默认值
// function searchXiaoJieJie2(age: number = 22,stature?: string): string {
//     let yy: string
//     yy = '找到了'+age+'岁'
//     if(stature !== undefined) {
//         yy += stature
//     }
//     return yy + '的小姐姐'
// }
// let result1: string = searchXiaoJieJie2(undefined,'大长腿')
// console.log(result1)

// function searchXiaoJieJie3(...xuqiu:string[]): string {
//     let yy: string = '找到了'
//     for(let i: number = 0; i < xuqiu.length; i++) {
//         yy += xuqiu[i]
//         if(i < xuqiu.length-1) {
//             yy += '、'
//         }
//     }
//     return yy + '的小姐姐'
// }
// let result2: string = searchXiaoJieJie3(...['22岁','大长腿','胸大','文明'])
// console.log(result2)

// // 箭头函数
// var add = (n1:number,n2:number): number => {
//     return n1+n2
// }

// console.log(add(1,4))

// 作用域与变量名提升
// var yangzi:string = '刘德华'

// function zhengXing():void{
//     var yangzi:string = '马德华'

//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)

// var yangzi:string = '刘德华'

// function zhengXing():void{
//     console.log('技术胖整形成了'+yangzi+'的样子')
//     var yangzi:string = '马德华'

//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)


// function zhengXing():void{
//     var yangzia:string = '刘德华'
//     {
//          let  yangzib:string = '小沈阳'
//          console.log('技术胖整形成了'+yangzib+'的样子')
//     }
 
//      console.log('技术胖整形成了'+yangzia+'的样子')
//     //  console.log('技术胖整形成了'+yangzib+'的样子')
//  }
//  zhengXing()