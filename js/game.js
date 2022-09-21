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


var gcell = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true,
    cellContent: EMPTY
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
            board[i][j] = gcell.cellContent
        }
    }
    board[1][1] = MINE
    board[3][2] = MINE
    return board
}


//Count mines around each cell and set the cell's minesAroundCount.

function setMinesNegsCount(board) {


}
























