/*
 * @Author: your name
 * @Date: 2020-09-07 18:31:49
 * @LastEditTime: 2020-09-07 19:32:03
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

// Array

// let arr1:number[ ]     //声明一个数值类型的数组
// let arr2:Array<string>  //声明一个字符串类型的数组
// let arr3:Array<number>

//定义一个空数组，数组容量为0
// let arr1:number[] = [] 
// //定义一个数组时，直接给数组赋值
// let arr2:Array<number> = [1,2,3,4,5]
// //定义数组 的同事给数组赋值
// let arr3:Array<string> = ['jspang','技术胖','金三胖']
// let arr4:Array<boolean> = [ true,false,false]

// 需要注意的是，在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。

//报错！ 必须存储number类型的数据
// let arr5:Array<number> = [1,2,true]

// let arr1:number[] = new Array()
// let ara2:number[] = new Array(1,2,3,4,5)
// let arr3:Array<string> = new Array('jspang','技术胖','金三胖')
// let arr4:Array<boolean> = new Array(true,false,false)

// 元组
// let Tuple: [number,string,boolean] = [1,'str',true]

// //声明一个元祖类型
// let x : [string,number]
// //正确的初始化
// x = ['hello',10]
// //错误的初始化方法
// x = [10,'hello']

// 需要说明的是这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。

let jspang:string = '技术胖'
let jspanga:String = new String("jspang.com")
console.log(jspang.length)
console.log(jspanga.length)