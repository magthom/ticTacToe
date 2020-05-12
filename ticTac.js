let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click' , cellClicked);
}

cells[0].textContent

function  cellClicked() {
    event.target.textContent = 'X'
    
}


cells[0].textContent
//===
//if else statements
//else if 
// if(conditionOne && , || conditionTwo ) {}







// console.log(cells);

// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', cellClicked);
// }

// function cellClicked() {
//     event.target.textContent = "X";
// }

// let playerOne = 0;
// function displayInput(square){ 
//     if ( playerOne == 1 ){
//         document.getElementById(square).innerHTML = "X";
//         playerOne = 0;
//     } else {
//         document.getElementById(square).innerHTML = "O";    
//         playerTwo = 1;
//     }   
// }
// displayInput();