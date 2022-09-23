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
            cellContent= (cell.isShown)? cellContent: ''  

            strHTML += `<td class="${className}" onclick="cellClicked(this,${i},${j})" style="width:200px; height:200px">${cellContent}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}


function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location) // .cell-3-5
	var elCell = document.querySelector(cellSelector) // <td></td>
	elCell.innerHTML = value
}
function getClassName(location) {
    var cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass
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


