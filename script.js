//function to create a grid of squares with event listeners to change the color on mouseover
const container = document.getElementById("container");


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows * cols);  c++) {
        let cell = document.createElement("div");
        
        container.appendChild(cell).className = "grid-item";
        cell.onmouseover = function changeColor (){
            this.style.backgroundColor = "white";
        }
    };
};

window.onopen = makeRows(16, 16);

//button that resets the color of the squares
function resetButton() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let square = container.querySelectorAll('div');
    square.forEach(square => square.style.backgroundColor = 'black');
    let z = prompt("How many boxes per side?");
    if (z>100) {
        alert ("The maximum number of boxes per side is 100");
    }
    else 
    makeRows(z, z);
}
