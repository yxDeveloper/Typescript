/*
 * @Author: your name
 * @Date: 2020-09-04 17:59:44
 * @LastEditTime: 2020-09-14 23:14:43
 * @LastEditors: Please set LastEditors
 * @Description: click
 * @FilePath: \Typescript\code\10-下棋游戏（XXOO）\xxoo_game - 2单元格点击（1）\index.ts
 */
/*
  单元格点击：

  1 获取到所有的单元格列表。
  2 遍历单元格列表，给每一个单元格添加点击事件。
  3 给当前被点击的单元格添加类名 x。
*/
let cells = document.querySelectorAll('.cell')
// console.log(cells);
cells.forEach(function(item) {
  let cell = item as HTMLDivElement
  // console.log(item)
  cell.addEventListener('click',function(event) {
    // console.log('click',event.target);
    let target = event.target as HTMLDivElement
    target.classList.add('x')
  })
})
