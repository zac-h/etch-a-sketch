const container = document.querySelector('#container');
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
                        let opacity = Number(this.style.backgroundColor.slice(-4, -1));
                        if(opacity <=0.9){
                            this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
                        };
                    case 'rainbow':
                        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
                        this.style.background = color;
                    case 'black':
                        this.classList.add('hover');
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

window.onload = () => {
    setupGrid(defaultSize);
}