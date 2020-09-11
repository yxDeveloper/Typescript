// 需求：判断数组（nums）中是否包含大于10的数字。

let nums: Array<number> = [1,3,4,6,4,24,34,4]

// 1 创建一个布尔值变量（has），默认值为 false
// let has: boolean = false
// 2 使用 forEach 方法来遍历数组
// nums.forEach(function (num) {
//   // console.log(num)
//   // 3 拿到数组的每一个元素，分别于 10 进行比较（if）
//   if (num > 10) {
//     // 4 如果大于 10 就将 has 设置为 true
//     has = true
//   }
// })
let has: boolean = nums.some(function(item){
  if(item > 40) return true
})

console.log(has)