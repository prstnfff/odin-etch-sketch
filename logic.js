
let rows = 16
let columns = 16

let containerDiv = document.querySelector('.container')

console.log(containerDiv)

console.log('row')

for(let row = 1; row <= rows; row++){

    console.log(row)

    let newRow = "<div class = 'row'>"
    for(let col = 1; col <= columns; col++){

        newRow += "<div class = 'gridPanel'></div>"

    }
    newRow += "</div>"

    containerDiv.insertAdjacentHTML('beforeend', newRow)
}