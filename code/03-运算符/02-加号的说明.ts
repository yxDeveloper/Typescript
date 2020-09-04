/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:24
 * @LastEditTime: 2020-09-04 19:01:33
 * @LastEditors: Please set LastEditors
 * @Description: ts中有type数据类型系统，给变量声明或赋值时类型要保持一致（除了undefined和null）；
 * 数据进行算术运算时，除了“+”可以作为string类型中的拼接符外，其他算术运算符只能用于number（enum/bigint）类型；
 * +string,可以将string转换为number（string为数值）
 * @FilePath: \Typescript\code\03-运算符\02-加号的说明.ts
 */
console.log('周杰' + '伦')

console.log(1 + '2')
console.log('1' + 2)