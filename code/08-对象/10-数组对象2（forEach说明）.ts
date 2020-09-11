// 声明函数时的参数，称为形参
function sum1 (num1: number, num2: number): number {
  return num1 + num2
}
// 调用函数时的参数，称为实参

console.log(sum1(1, 3));




// 模拟 forEach 方法的声明：
function forEach2(callbackfn: (value: boolean, index?: string) => void) {

}

// 模拟 forEach 方法的调用：
// 此处的函数是实参！
forEach2(function(a){})



// 元组：
// let songs3: [string,string,string,number] = ['五环之歌','探清水河','晴天',2]
// 成员为多种类型的数组类型注解方式：：
// let songs3: (string | number)[] = ['五环之歌','探清水河','晴天',123]
// 普通类型注解方式：
// let songs3: string[] = ['五环之歌','探清水河','晴天']
// Array方式：
let songs3: Array<string> = ['五环之歌','探清水河','晴天']
songs3.forEach(function(item,i) {
  console.log('索引',i,'元素',item);
  
})


// let nums: number[] = [1, 12, 9, 8, 6]
// nums.forEach(function (a) {})