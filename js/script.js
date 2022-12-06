
function createGridSquare(number){
    const elemento = document.createElement('div');
    elemento.classList.add('square')
    elemento.innerHTML += number;
    return elemento;
}
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function uniqueRandomNumbers(numBlacklist, min, max){
    
    let randomDigit;
    let checkDouble = false
    while(checkDouble == true){
        randomDigit = randomNumbers(min, max)
        if( numBlacklist.includes(randomDigit) == false ){
            checkDouble == true
        }      
    }
    return randomDigit;
}

let grid = document.getElementById('grid');
let start = document.getElementById('btn');
const blackList = [];

start.addEventListener('click',function(){
    let mode = document.getElementById('difficulty').value
    console.log(mode)
    if(mode == 'facile'){
        for(let i=1; i<=100; i++){

            const currentSquare = createGridSquare(i);
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                console.log(`hai cliccato il numero ${i}`)
            })
        }
    }
    else if(mode == 'intermedio'){
        for(let i=1; i<=81; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('intermedio')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                console.log(`hai cliccato il numero ${i}`)
            })
        }
    }
    else if(mode == 'difficile'){
        for(let i=1; i<=49; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('difficile')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                console.log(`hai cliccato il numero ${i}`)
            })
        }
    }
})