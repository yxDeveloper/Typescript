/*
  封装判赢函数：

  1 声明函数（checkWin），指定参数（player），类型注解为：Player 枚举。
  2 指定返回值：现在函数中写死返回 true 或 false。
  3 在给单元格添加类名后（下棋后），调用函数 checkWin，拿到函数返回值。
  4 判断函数返回值是否为 true，如果是，说明当前玩家获胜了。
*/
enum Player {
  X = 'x',
  O = 'o'
}

let cells = document.querySelectorAll('.cell')
let gameBord = document.querySelector('#bord') as HTMLDivElement
let currentPlayer = Player.X

cells.forEach(function(item) {
  let cell = item as HTMLDivElement
  cell.addEventListener('click',clickCell,{ once: true })
})

function clickCell(event: MouseEvent) {
  let target = event.target as HTMLDivElement
  target.classList.add(currentPlayer)

  let isWin = checkWin(currentPlayer)
  if (isWin) {
    console.log('当前玩家赢了', currentPlayer);
  }

  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  gameBord.classList.remove(Player.X,Player.O)
  gameBord.classList.add(currentPlayer)
}

function checkWin (Player: Player): boolean {
  console.log('参数',Player);
  return true
}