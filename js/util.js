'use strict'

function renderBoard(board, selector) {
var cellContent
    var strHTML = '<table border="1"><tbody>'
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            const cell = board[i][j]
            if(cell.isMine){
                cellContent =MINE
            }
            else if(cell.minesAroundCount){
                cellContent =cell.minesAroundCount
            }
            else cellContent = ''

            const className = `cell cell-${i}-${j}`
            // cellContent= (cell.isShown)? cellContent: ''  

            strHTML += `<td class="${className}" onclick="cellClicked(this,${i},${j})" style="width:200px; height:200px">${cellContent}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

function cellClicked(ellCell,i,j){
    const cell =gBoard[i][j]
    console.log(ellCell,i,j)
}

// Select the elCell and set the value
// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

