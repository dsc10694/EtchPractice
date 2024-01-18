const gridesize = 600
let squarePerSide = 16
const sketchArea = document.getElementById('sketch');
const cellContainer = document.createElement('div')

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


createGrid()

