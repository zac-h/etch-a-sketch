const container = document.querySelector('#container');

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
            divSquare.addEventListener('mouseenter',function(e){
                e.target.classList.add('hover');
            });
        }
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
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