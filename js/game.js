'use strict'

const RESTART_EMOJI = '🙂'
const LOSE_EMOJI = '😭'
const WIN_EMOJI = '🥳'

const MINE = '💣' // (1,1)(1,2)
const EMPTY = ''
var gBoard

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gLevel = {
    size: 4,
    mines: 2
}

function initGame() {
    gBoard = buildBoard()
    console.log(gBoard)
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = gLevel.size
    var board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: setMinesNegsCount(i, j),
                isShown: false,
                isMine: false,
                isMarked: false,
            }
        }
    }
    board[1][1] = {
        minesAroundCount: setMinesNegsCount(1, 1),
        isShown: false,
        isMine: true,
        isMarked: false,
    }
    board[3][2] = {
        minesAroundCount: setMinesNegsCount(3, 2),
        isShown: false,
        isMine: true,
        isMarked: false,
    }

    return board
}


//Count mines around each cell and set the cell's minesAroundCount.
function setMinesNegsCount() {
    return 4
}

function setMinesNegsCount1(rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= gBoard[0].length) continue
            var currCell = gBoard[rowIdx][colIdx]
            if (currCell=== MINE) {
                count++
            }
        }
    }
return count

    }



















