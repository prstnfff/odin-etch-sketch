let containerDiv = document.querySelector('.container')
let resetButton = document.querySelector('.grid-reset')

function createGrid(size){

    containerDiv.innerHTML = ''

    for(let row = 1; row <= size; row++){
    
        let newRow = "<div class = 'row'>"
        for(let col = 1; col <= size; col++){
    
            newRow += "<div class = 'gridPanel'></div>"
    
        }
        newRow += "</div>"
    
        containerDiv.insertAdjacentHTML('beforeend', newRow)
    }
    setUpListeners()

}

createGrid(25)


const colorGradient = ['#ffffff', '#eeeeee', '#dddddd', '#cccccc', '#bbbbbb', '#aaaaaa', 
                        '#999999', '#888888', '#777777', '#666666', '#555555', '#444444', 
                        '#333333', '#222222', '#111111', '#000000']

function colorAdjust(currentColor){


    let currentIndex = colorGradient.indexOf(currentColor)

    let newColor = colorGradient[ Math.min( (currentIndex + 1), (colorGradient.length - 1))]

    return(newColor)
}

/// shamelessly stolen from stackoverflow:  https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

function setUpListeners(){
    document.querySelectorAll('.gridPanel').forEach( gridPiece => {

        gridPiece.addEventListener('mouseover', event => {

            let style = getComputedStyle(gridPiece, '') 
            let currentColor = style.getPropertyValue('background-color') ?? '#fff'

            currentColor = rgb2hex(currentColor)

            newCol = colorAdjust(currentColor)
            event.target.setAttribute('style', `background-color:${newCol}`)
        })
    })
}



resetButton.addEventListener( 'click', event => {

    
    let value = 0

    while((!value || value < 1 || value > 100) && value != null){
        let inp = prompt("What size Grid do you want to create?\n Enter a number between 1 and 100.", 25)

        if (inp === null) {break}

        value = Number.parseInt(inp)
    }

    if(value){
        createGrid(value)
    }
    
})

