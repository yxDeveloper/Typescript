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
var message = document.querySelector('#message');
var winner = document.querySelector('#winner');
var restart = document.querySelector('restart');
var currentPlayer = Player.X;
var steps = 0;
restart.addEventListener('click', function () {
    message.style.display = 'none';
    steps = 0;
    currentPlayer = Player.X;
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(Player.X);
    cells.forEach(function (item) {
        var cell = item;
        cell.classList.remove(Player.X, Player.O);
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell, { once: true });
    });
});
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    steps++;
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerText = currentPlayer + '赢了！';
        return;
    }
    if (steps === 9) {
        message.style.display = 'block';
        winner.innerText = '平局';
        return;
    }
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
function checkWin(player) {
    return winsArr.some(function (item) {
        if (hasClass(cells[item[0]], player) &&
            hasClass(cells[item[1]], player) &&
            hasClass(cells[item[2]], player)) {
            return true;
        }
        return false;
    });
}
function hasClass(el, name) {
    return el.classList.contains(name);
}
