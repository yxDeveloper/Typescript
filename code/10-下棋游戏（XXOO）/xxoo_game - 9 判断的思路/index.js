/*
  判赢的思路：
*/
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var cells = document.querySelectorAll('.cell');
var gameBord = document.querySelector('#bord');
var currentPlayer = Player.X;
// 给单元格绑定点击事件
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 单元格click 事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 处理下一步提示
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.remove(currentPlayer);
}
