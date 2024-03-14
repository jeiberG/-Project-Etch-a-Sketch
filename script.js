const conteiner = document.querySelector(".conteiner");
const gridSizeRange = document.getElementById("gridSizeRange");
const btnCreate = document.querySelector(".range button ");
const range = document.querySelector(".range input");
const label = document.querySelector(".range label span");

btnCreate.addEventListener('click', () => {
    label.innerHTML = range.value;
    const conteinerWidth = conteiner.clientWidth;
    const gridSize = parseInt(range.value );
    const gridWidth = (conteinerWidth / gridSize); // Restar el doble del borde entre cuadros

    const previousGrids = document.querySelectorAll('.grid');
    previousGrids.forEach(grid => {
        conteiner.removeChild(grid);
    });

    for (let i = 0; i < gridSize ** 2; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${gridWidth}px`;
        grid.style.height = `${gridWidth}px`;
        grid.addEventListener("mouseover", changeColor);
        conteiner.appendChild(grid);
    }
});

function changeColor(e) {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const currentColor = e.target.style.backgroundColor;
    const currentOpacity = parseFloat(e.target.style.opacity) || 0;
    if (!currentColor || currentOpacity >= 0.9) {
      e.target.style.backgroundColor = randomColor;
      e.target.style.opacity = 0.1;
    } else {
      e.target.style.opacity = currentOpacity + 0.1;
    }
  }