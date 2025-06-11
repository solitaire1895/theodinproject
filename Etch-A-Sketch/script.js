// script.js
const gridContainer = document.getElementById("gridContainer");
const colorPicker = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");
const gridSizeSlider = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");

// Create grid
function createGrid(size) {
  gridContainer.innerHTML = ""; // Clear old grid
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    // Add hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = colorPicker.value;
    });

    gridContainer.appendChild(square);
  }
}

// Initial grid
createGrid(16);

// Clear button
clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

// Handle grid size slider
gridSizeSlider.addEventListener("input", (e) => {
  const size = e.target.value;
  gridSizeLabel.textContent = `${size} x ${size}`;
  createGrid(size);
});
