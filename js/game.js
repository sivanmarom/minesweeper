'use strict'

const RESTART_EMOJI = '🙂'
const LOSE_EMOJI = '😭'
const WIN_EMOJI = '🥳'

const MINE = '💣' // (1,1)(1,2)
const EMPTY = ''
var gBoard =[]

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
     buildBoard()
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard(){
initBoard()
setMines()
setMinesNegsCount()
}

function initBoard() {
    const size = gLevel.size
    for (var i = 0; i < size; i++) {
        gBoard.push([])
        for (var j = 0; j < size; j++) {
           gBoard[i].push({
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }      )
        }
    }
}

function setMines(){
    gBoard[1][1].isMine =true
    gBoard[3][2].isMine = true

}
//Count mines around each cell and set the cell's minesAroundCount.
function setMinesNegsCount() {
    for (var rowIdx = 0; rowIdx < gLevel.size; rowIdx++) {
        for (var colIdx = 0; colIdx < gLevel.size; colIdx++) {
            var count = 0
            for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
                if (i < 0 || i >= gLevel.size) continue
                for (var j = colIdx - 1; j <= colIdx + 1; j++) {
                    if (i === rowIdx && j === colIdx) continue
                    if (j < 0 || j >= gLevel.size) continue
                    var currCell = gBoard[i][j]
                    if (currCell.isMine) {
                        count++
                    }
                }
            }
         gBoard[rowIdx][colIdx].minesAroundCount =count
        }
    }
}

function cellClicked(elCell,i,j){
    const cell = gBoard[i][j]
    var cellLocation ={i:i,j:j}
    if(cell.minesAroundCount) {cell.isShown =true
//  console.log(elCell,cellLocation,i,j)
renderCell(cellLocation,cell.minesAroundCount)}


}


















