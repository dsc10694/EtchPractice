const gridesize = 600
let squarePerSide = 16
const sketchArea = document.getElementById('sketch');
const cellContainer = document.createElement('div')
const noButton = document.querySelector('.noButton')
const button = document.querySelector('.reset')



sketchArea.style.width = sketchArea.style.height = `${gridesize}px`;
    
 
function changeBackgroundColor(){
    this.style.backgroundColor = 'black';
}
function createGrid()  { 
    let totalsqure = squarePerSide*squarePerSide;
    const widthHeight = `${gridesize/squarePerSide-2}px`

for (i=0; i<totalsqure; i++){
    const    gridCell = document.createElement('div');
    gridCell.style.backgroundColor = 'white'
    
    
    gridCell.style.width =widthHeight
    gridCell.style.height = widthHeight
    gridCell.classList.add('cell')
    
    sketchArea.appendChild(gridCell)
    gridCell.addEventListener('mouseover',changeBackgroundColor)   
    button.addEventListener('click', () => {
        
        gridCell.style.backgroundColor ='white'
       
    }   )
    
    }
    
}

function changeSquareSize() {
    let userInput;
    let noSquares;
   
    userInput = prompt('What is the number of squares that you want on axis?');
    noSquares = parseInt(userInput);
    if (isNaN(noSquares)|| (noSquares>100) || (noSquares<=0)) {
        alert ('Invalid input. Please enter a valid number between from 1 to 100');
    }
    else{
        squarePerSide = noSquares
       const gridesize =600;
        sketchArea.innerHTML ='';
        createGrid();
    }
    
}

noButton.addEventListener('click',changeSquareSize)
createGrid()

