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
            var cell = {
                minesAroundCount: setMinesNegsCount(),
                isShown: false,
                isMine: false,
                isMarked: false,
            }
            board[i][j] =cell
        }
    }
    board[1][1] = {
        minesAroundCount: setMinesNegsCount(),
        isShown: false,
        isMine: true,
        isMarked: false,
    }
    board[3][2] = {
        minesAroundCount: setMinesNegsCount(),
        isShown: false,
        isMine: true,
        isMarked: false,
    }



    return board
}


//Count mines around each cell and set the cell's minesAroundCount.
function setMinesNegsCount(){
    return 4
}

// function setMinesNegsCount1() {
//     var minesNegsCount =0 
//     var currCell
//     for (var i = i - 1; i <= i + 1; i++) {
//         if (i < 0 || i >= gBoard.length) continue
//         for (var j = j - 1; j <= j + 1; j++) {
//             if (i === j && j === j) continue
//             if (j < 0 || j >= gBoard[0].length) continue
//             currCell = gBoard[i][j]
//             if (currCell === MINE) minesNegsCount ++
// currCell.minesAroundCount = minesNegsCount
//     }   
// }
// }


















