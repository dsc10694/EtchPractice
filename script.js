const gridesize = 600  //value for size of grid
let squarePerSide = 16     //initial value of each axis of grid
const sketchArea = document.getElementById('sketch');   
const cellContainer = document.createElement('div')     //create container to hold cells
const noButton = document.querySelector('.noButton')        //button for number of squares per side
const button = document.querySelector('.reset')       //reset button



sketchArea.style.width = sketchArea.style.height = `${gridesize}px`;  //set value of height and with of sketch area
    
 

function createGrid()  {  //function to create grid
    let totalsqure = squarePerSide*squarePerSide; //value for Length by width 
    const widthHeight = `${gridesize/squarePerSide-2}px` //create width and height of each square

for (i=0; i<totalsqure; i++){  //for loop  to create each grid
    const    gridCell = document.createElement('div');
    gridCell.style.backgroundColor = 'white'  //set color of white background for each cell
    
    
    gridCell.style.width =widthHeight  //set width of cell
    gridCell.style.height = widthHeight //set height of cells
    gridCell.classList.add('cell') //add class list to gridcell for use in CSS
    
    sketchArea.appendChild(gridCell) //add gridcell to sketch area
    function changeBackgroundColor(){     //color  change which will be put in mouse over event listener
        gridCell.style.backgroundColor = 'black';
    }
    gridCell.addEventListener('mouseover',changeBackgroundColor)    //change background color on hover
    button.addEventListener('click', () => { // when button clicked  reset all grids to white
        
        gridCell.style.backgroundColor ='white'
       
    }   )
    
    }
    
}

function changeSquareSize() {  //change number of squares 
    let userInput;
    let noSquares;  //number of squares
   
    userInput = prompt('What is the number of squares that you want on axis?');
    noSquares = parseInt(userInput);  //input into int
    if (isNaN(noSquares)|| (noSquares>100) || (noSquares<=0)) {
        alert ('Invalid input. Please enter a valid number between from 1 to 100');
    }
    else{ //recreate grid  based on user input
        squarePerSide = noSquares
       const gridesize =600;
        sketchArea.innerHTML ='';
        createGrid();
    }
    
}

noButton.addEventListener('click',changeSquareSize) //number of square button
createGrid() 

