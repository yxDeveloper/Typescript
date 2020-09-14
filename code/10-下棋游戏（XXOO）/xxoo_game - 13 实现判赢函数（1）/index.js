var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // 斜
];
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
        console.log('当前玩家获胜了', currentPlayer);
    }
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
function checkWin(player) {
    var isWin = winsArr.some(function (item) {
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        var cell1 = cells[cellIndex1];
        var cell2 = cells[cellIndex2];
        var cell3 = cells[cellIndex3];
        console.log(cell1, cell2, cell3);
    });
    return true;
}
