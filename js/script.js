
function createGridSquare(){
    const elemento = document.createElement('div');
    elemento.classList.add('square')
    return elemento;
}
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let grid = document.getElementById('grid');
let start = document.getElementById('btn');

start.addEventListener('click',function(){
    for( i=0; i<100; i++){
        const currentSquare = createGridSquare();
        grid.appendChild(currentSquare);
        
        currentSquare.addEventListener('click',function(){
            this.classList.add('clicked');
        })
    }
})