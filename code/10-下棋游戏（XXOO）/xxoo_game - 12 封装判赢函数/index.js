/*
  封装判赢函数：

  1 声明函数（checkWin），指定参数（player），类型注解为：Player 枚举。
  2 指定返回值：现在函数中写死返回 true 或 false。
  3 在给单元格添加类名后（下棋后），调用函数 checkWin，拿到函数返回值。
  4 判断函数返回值是否为 true，如果是，说明当前玩家获胜了。
*/
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var cells = document.querySelectorAll('.cell');
var gameBord = document.querySelector('#bord');
var currentPlayer = Player.X;
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        console.log('当前玩家赢了', currentPlayer);
    }
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
function checkWin(Player) {
    console.log('参数', Player);
    return true;
}
