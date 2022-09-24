'use strict'

window.oncontextmenu = e => e.preventDefault() // cancel default menus

const RESTART_EMOJI = '🙂'
const LOSE_EMOJI = '😭'
const WIN_EMOJI = '🥳'

const MINE = '💣'
const EMPTY = ''
const FLAG = '🚩'
var gBoard = []

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

function buildBoard() {
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
            })
        }
    }
}

function setMines() {
    for (var i = 0; i < gLevel.mines; i++) {
        var mineLocation = getRandomLocation()
        gBoard[mineLocation.i][mineLocation.j].isMine = true
    }

}

function getRandomLocation() {
    var emptyLocations = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            if (!cell.isMine) {
                var emptyLocation = { i: i, j: j }
                emptyLocations.push(emptyLocation)
            }
        }
    }
    var randIdx = getRandomInt(0, emptyLocations.length)
    return emptyLocations[randIdx]
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
            gBoard[rowIdx][colIdx].minesAroundCount = count
        }
    }
}

function cellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
    var cellLocation = { i: i, j: j }
    if(!cell.isMarked){
    if (cell.minesAroundCount) {
        gGame.shownCount++
        cell.isShown = true
        //  console.log(elCell,cellLocation,i,j)
        renderCell(cellLocation, cell.minesAroundCount)
    }

    else if (cell.isMine) {
        checkGameOver(elCell, i, j)
    }
    else {
        expandShown(i, j)

    }
}
}
function expandShown(rowIdx, colIdx) {
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            var cellLocation = { i: i, j: j }
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= gBoard[0].length) continue
            var currCell = gBoard[i][j]
            if (currCell.minesAroundCount) {
                currCell.isShown = true
                renderCell(cellLocation, gBoard[i][j].minesAroundCount)
            }
            else if (currCell.minesAroundCount === 0 && currCell.isMine === false) {
                currCell.isShown = true

                renderCell(cellLocation, '')
            }
        }
    }
}

function checkGameOver(elCell, i, j) {
    const cell = gBoard[i][j]
    var mine
    var cellLocation = { i: i, j: j }
    if (cell.isMine) {
        gGame.isOn = false
        cell.isShown = true
        var elMines = document.querySelectorAll('.mine')
        renderCell(cellLocation, MINE)
    }
//isnt done!!

}

function cellMarked(elCell, i, j) {
    var currCell = gBoard[i][j]
    currCell.isMarked = true
    if(currCell.isMarked&& currCell.isMine){
    gGame.markedCount++}
    elCell.innerText = FLAG
    // cant unflaged yet
}











