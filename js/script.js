
function createGridSquare(){
    const elemento = document.createElement('div');
    elemento.classList.add('square')
    return elemento;
}

let grid = document.getElementById('grid')

for( i=0; i<100; i++){
    const currentSquare = createGridSquare();
    grid.appendChild(currentSquare);
}