document.getElementById('circle').addEventListener('click', function () {
    displayShapePage('circle');
});

document.getElementById('square').addEventListener('click', function () {
    displayShapePage('square');
});

document.getElementById('triangle').addEventListener('click', function () {
    displayShapePage('triangle');
});

document.getElementById('back-btn').addEventListener('click', function () {
    goBackToSelection();
});

function displayShapePage(shape) {
    document.getElementById('shape-selection').style.display = 'none';

    document.getElementById('input-area').style.display = 'block';

    let shapeContainer = document.getElementById('shape-container');
    shapeContainer.innerHTML = ''; 

    let formHtml = '';
    if (shape === 'circle') {
        formHtml = `
            <div class="circle" style="width: 100px; height: 100px; margin: 20px auto;"></div>
            <h2>Calculate Area of Circle</h2>
            <label for="radius">Radius:</label>
            <input type="number" id="radius" placeholder="Enter radius">
            <button id="calculate-btn" style="background-color:grey">Calculate Area</button>
            <p id="result"></p>
        `;
    } else if (shape === 'square') {
        formHtml = `
            <div class="square" style="width: 100px; height: 100px; margin: 20px auto;"></div>
            <h2>Calculate Area of Square</h2>
            <label for="side">Side:</label>
            <input type="number" id="side" placeholder="Enter side length">
            <button id="calculate-btn" style="background-color:grey">Calculate Area</button>
            <p id="result"></p>
        `;
    } else if (shape === 'triangle') {
        formHtml = `
            <div class="triangle" style="width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid #e74c3c; margin: 20px auto;"></div>
            <h2>Calculate Area of Triangle</h2>
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Enter base">
            <label for="height">Height:</label>
            <input type="number" id="height" placeholder="Enter height">
            <button id="calculate-btn" style="background-color:grey">Calculate Area</button>
            <p id="result"></p>
        `;
    }

    shapeContainer.innerHTML = formHtml;

    document.getElementById('calculate-btn').addEventListener('click', function () {
        calculateArea(shape);
    });
}

function goBackToSelection() {
    document.getElementById('input-area').style.display = 'none';

    document.getElementById('shape-selection').style.display = 'block';
}

function calculateArea(shape) {
    let result = document.getElementById('result');
    let area = 0;

    if (shape === 'circle') {
        let radius = document.getElementById('radius').value;
        if (radius > 0) {
            area = Math.PI * Math.pow(radius, 2);
            result.textContent = `Area of Circle: ${area.toFixed(2)}`;
        } else {
            result.textContent = 'Please enter a valid radius.';
        }
    } else if (shape === 'square') {
        let side = document.getElementById('side').value;
        if (side > 0) {
            area = Math.pow(side, 2);
            result.textContent = `Area of Square: ${area.toFixed(2)}`;
        } else {
            result.textContent = 'Please enter a valid side length.';
        }
    } else if (shape === 'triangle') {
        let base = document.getElementById('base').value;
        let height = document.getElementById('height').value;
        if (base > 0 && height > 0) {
            area = 0.5 * base * height;
            result.textContent = `Area of Triangle: ${area.toFixed(2)}`;
        } else {
            result.textContent = 'Please enter valid base and height values.';
        }
    }
}
