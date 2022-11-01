let containerDiv = document.querySelector('.container')
let resetButton = document.querySelector('.grid-reset')
let colorInput = document.querySelector('.color-input')

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


function setUpListeners(){
    document.querySelectorAll('.gridPanel').forEach( gridPiece => {

        gridPiece.addEventListener('mouseover', event => {

            event.target.setAttribute('style', `background-color:${colorInput.value}`)
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

