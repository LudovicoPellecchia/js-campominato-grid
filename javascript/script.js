"use strict"

const squareCountsSelect = document.querySelector("[name='squareCounts']")
const btnStart = document.getElementById("btn-start")


const gridContainer = document.querySelector(".grid-container")


btnStart.addEventListener("click", onBtnClick);


/* Funzione argomento della funzione addEventListener che ha effetto al click, al suo interno
ci sono più funzioni invocate che hanno lo scopo di snellire il codice e di renderlo più efficente */
function onBtnClick(){
    const squareCounts = parseInt(squareCountsSelect.value); //valore scelto dall'utente nella selectg

    const gridList = createGrid(squareCounts)//variabile che sfrutta una funzione che crea la griglia con all'interno i quadrati

    printGrid(gridContainer, gridList)
}


/* funzione che crea un singolo quadrato  */

function createSingleSquare (squareContent, squareCounts) {
    const square = document.createElement("div")

    const squaresPerRow = Math.sqrt(squareCounts)

    square.classList.add("grid-square");
    square.textContent = squareContent;
    square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

    square.addEventListener("click", function(){
        square.classList.toggle("bg-success")
    })

    return square
}

/* funzione che crea tutta la griglia dato un numero di celle */

function createGrid (squaresNumber) {
    const grid =[]

    for (let i=0; i< squaresNumber; i++){
        const newSquare = createSingleSquare (i, squaresNumber)
        grid.push(newSquare)
    }

    return grid;
}


/* funzione che aggiunge ad un elemento html la lista dei quadrati */

function printGrid (container, squaresList) {
    //reset del contenuto del container per evitare che ci siano div creati precedentemente
    container.innerHTML =""

    for (let i = 0; i < squaresList.length; i++){
        container.append(squaresList[i])
    }
}