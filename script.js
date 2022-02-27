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


            /*divRow.addEventListener('mouseleave',function(e){
                e.target.classList.remove('hover');
                //e.target.style.background = '';
            });*/


        }
    }

    /*const rows = document.querySelectorAll('div.row');

    rows.forEach( (row) => {
        row.addEventListener('hover',()=>{
            alert(row.className);
        });
    });
    console.log(rows);*/
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{

});

    createGrid(squareSize);