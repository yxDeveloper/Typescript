/*
 * @Author: your name
 * @Date: 2020-09-07 18:31:49
 * @LastEditTime: 2020-09-07 20:33:07
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

// 获取字符串的长度
// let jspang:string = '技术胖'
// let jspanga:String = new String("jspang.com")
// console.log(jspang.length)
// console.log(jspanga.length)

// 查找字符串
// let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
// let xiaoJieJie:string = "小姐姐"
// console.log(something.indexOf(xiaoJieJie))   //19

// 截取字符串
// let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
// let xiaoJieJie:string = "小姐姐"
// console.log(something.substring(8))
// console.log(something.substring(8,14))

// 替换字符串
// let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
// let xiaoJieJie:string = "小姐姐"
// console.log(something.replace(xiaoJieJie,'小哥哥'))

// let d:Date = new Date()
// console.log(d)
// // let d:Date = new Data()

// let d:Date = new Date(1000)
// let da:Date = new Date(2000)
// console.log(d)  //1970-01-01T00:00:01.000Z
// console.log(da) //1970-01-01T00:00:02.000Z

// let d1:Date = new Date('2018/09/06 05:30:00')
// let d2:Date = new Date('2018-09-06 05:30:00')
// let d3:Date = new Date('2018-09-06T05:30:00')
// console.log(d1)
// console.log(d2)
// console.log(d3)

// let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);

// 正则：g是全局修饰符，i是忽略大小写，m是多行模式。
// let reg1:RegExp = new RegExp("jspang")  //表示字符串规则里含有jspang
// console.log(reg1)
// let reg2:RegExp = new RegExp("Jspang",'gi')
// console.log(reg2)

// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，
// 如果存在则返回 true，不存在则返回 false。
// exec(string) : 用于在字符串中查找指定正则表达式，
// 如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。

// let reg1:RegExp =  /jspang/i
// let website:string = 'jspang.com'
// let result:boolean = reg1.test(website)
// console.log(result)    //true
// let reg1:RegExp =  /jspang/i
// let website:string = 'jspang.com'
// console.log(reg1.exec(website))
// //[ 'jspang', index: 0, input: 'jspang.com' ]

// test/exec
// 正则表达式.test('字符串') /正则表达式/giy.exec('字符串')

// 3.类

// class XiaoJieJie {
//     name: string
//     age: number
//     constructor(name: string,age: number) {
//         this.name = name
//         this.age = age
//     }
//     say() {
//         console.log('hellow girl')
//     }
//     // static
//     // set
//     // get
// }
// let jieJie: XiaoJieJie = new XiaoJieJie('范冰冰',18)
// console.log(jieJie)
// jieJie.say()

// class XiaoJieJie2{
//     public sex:string
//     protected name:string
//     private age:number
//     public constructor(sex:string,name:string,age:number){
//         this.sex=sex
//         this.name=name
//         this.age=age
//     }
//     public sayHello(){
//         console.log('小哥哥好')
//     }

//     protected sayLove(){
//         console.log('我爱你')
//     }
// }

// var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

// console.log(jiejie2.sex)
// console.log(jiejie2.name)   //报错
// console.log(jiejie2.age)    //报错
// jiejie2.sayHello()
// jiejie2.sayLove()    //报错

// class Man{
//     public readonly sex:string = '男'
// }

// var man:Man = new Man()
// man.sex='女'

class Jspang{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()

// class JsShuai extends Jspang {
//     public xingxiang:string = '帅气'
//     public zhuangQian(){
//         console.log('一天赚了一个亿')
//     }
// }

// let shuai = new JsShuai("技术帅",5,'演讲')
// shuai.interest()
// shuai.zhuangQian()

// class JsShuai extends Jspang{
//     public xingxiang:string = '帅气'
//     public interest(){
//         super.interest()
//         console.log('建立电商平台')
//     }
//     public zhuangQian(){
//         console.log('一天赚了一个亿')
//     }
// }
// let shuai = new JsShuai("技术帅",5,'演讲')
// shuai.interest()

// interface
// interface Husband {
//     sex:string
//     interest:string
//     maiBaoBao?:Boolean
// }
// let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
// console.log(myhusband)

// interface  SearchMan{
//     (source:string,subString:string):boolean
// }
// interface SearchMan1 {
//     (source: string, subString: string): boolean
// }

// let mySearch:SearchMan

// mySearch = function(source:string,subString:string):boolean{
//     let flag =source.search(subString)
//     return (flag != -1)
// } 

// console.log(mySearch('高、富、帅、德','胖')) //false

### 命名空间的使用
当然命名空间就是解决这个问题的，命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。我们来看一个例子：

namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()