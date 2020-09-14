enum Player {
  X = 'x',
  O = 'o'
}

let winsArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 竖
  [0, 4, 8], [2, 4, 6]	            // 斜
]

let cells = document.querySelectorAll('.cell')
let gameBord = document.querySelector('#bord')
let currentPlayer = Player.X

cells.forEach(function(item){
  let cell = item as HTMLDivElement
  cell.addEventListener('click',clickCell,{ once: true })
})

function clickCell(event: MouseEvent) {
  let target = event.target as HTMLDivElement
  target.classList.add(currentPlayer)

  let isWin = checkWin(currentPlayer)
  if (isWin) {
    console.log('当前玩家获胜了', currentPlayer)
  }

  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  gameBord.classList.remove(Player.X,Player.O)
  gameBord.classList.add(currentPlayer)
}

function checkWin(player: Player): boolean {

  let isWin = winsArr.some(function (item) {
    let cellIndex1 = item[0]
    let cellIndex2 = item[1]
    let cellIndex3 = item[2]
    let cell1 = cells[cellIndex1]
    let cell2 = cells[cellIndex2]
    let cell3 = cells[cellIndex3]
    console.log(cell1,cell2,cell3);
  })
  return true
}