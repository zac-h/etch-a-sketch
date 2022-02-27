const container = document.querySelector('#container');

const defaultSize=16;

function setupGrid(size){
    for(let i=1; i<=size; i++){
        const divColumn = document.createElement('div');
        divColumn.classList.add('column');
        divColumn.classList.add(i);
        container.appendChild(divColumn);

        for(let j=1; j<=size; j++){
            const divRow = document.createElement('div');
            divRow.classList.add('row', `column:${i}`, `row:${j}`);
            divColumn.appendChild(divRow);
            divRow.addEventListener('mouseenter',function(e){
                e.target.classList.add('hover');
                //e.target.style.background = 'blue';
            });


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

window.onload = () => {
    setupGrid(defaultSize);
}