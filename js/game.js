'use strict'

const START_EMOJI = '🙂'
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


var gcell ={ minesAroundCount: 0,
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
    renderBoard(gBoard,'.board-container')
}

function buildBoard() {
    const size = gLevel.size
    var board =[]
    for(var i= 0; i<size; i++){
    board.push([])
    for(var j= 0; j<size; j++){
        if(i ===3 && j===1 ||
            i ===1 && j ===2) {
                gcell.isMine = true
                gcell.cellContent =MINE
            }
            else
            board[i][j]=gcell.cellContent
    }
}
return board
}

//Count mines around each cell and set the cell's minesAroundCount.

function setMinesNegsCount(board) {

}
























