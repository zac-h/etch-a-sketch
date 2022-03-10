const container = document.querySelector('#container');

const squareSize=8;
const gridSize=8;

//Create squared divs
function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGrid(gridSize){
    for(let i=0; i<gridSize; i++){
        for(let j=0; j<gridSize; j++){
            container.appendChild(createDiv(container.clientWidth / gridSize));


            /*div.addEventListener('mouseenter',function(e){
                e.target.classList.add('hover');
                //e.target.style.background = 'blue';
            });*/
var colorButton = "black";
const defaultSize=8;

function setupGrid(size){
    for(let i=1; i<=size; i++){
        const divColumn = document.createElement('div');
        divColumn.classList.add('column');
        container.appendChild(divColumn);

        for(let j=1; j<=size; j++){
            const divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divColumn.appendChild(divSquare);
            divSquare.addEventListener('mouseenter',function(){
                switch (colorButton){
                    case 'gray':
                        if(this.style.backgroundColor.match(/rgba/)){
                            let opacity = Number(this.style.backgroundColor.slice(-4, -1));
                            if(opacity <=0.9){
                                this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
                                this.classList.add('gray');
                                console.log(this.style.backgroundColor);
                                console.log(this.classList);
                            }
                        }else if(this.classList.contains('gray') && this.style.backgroundColor == 'rgb(0, 0, 0)'){
                            return;
                        }else{
                            console.log('else');
                            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                        }
                        break;
                    case 'rainbow':
                        this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                        this.classList.remove('gray');
                        break;
                    case 'black':
                        this.style.backgroundColor = 'black';
                        this.classList.add('hover');
                        this.classList.remove('gray');
                        break;
                }
            });
            
            
            /*divSquare.addEventListener('mouseenter',function(e){
                
                //increment opacity on hover
                    let opacity = Number(divSquare.style.backgroundColor.slice(-4, -1));
                    if(opacity <=0.9){
                        divSquare.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
                    };
            

                //random color on hover
                //e.target.classList.add('hover');
                //var color = '#'+Math.floor(Math.random()*16777215).toString(16);
                //e.target.style.background = color;
                
            });*/
        }
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const resetBtn = document.querySelector('#resetBtn');
const colorBtns = document.querySelectorAll('.color-choice');

colorBtns.forEach(colorBtn => colorBtn.addEventListener('click', (e)=>{
    colorButton = e.target.dataset.color;
    console.log(e.target.dataset.color);
}));


resetBtn.addEventListener('click', () =>{
    clearGrid();
    newSize = prompt('Input grid size: ');
    if(newSize>100){
        newSize = prompt('Please enter value less than 100:');
    }
    setupGrid(newSize);
});

    createGrid(squareSize);