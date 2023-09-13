//init values
const STARTSIZE = 16;
const STARTCOLOR = 'black';
const STARTMODE = 'color'
const grid = document.querySelector('.container');
const resetbtn = document.getElementById('resetbtn');
const sizedisp = document.getElementById('sizedisp');
const sizeslider = document.getElementById('sizeslider');
const colorpicker = document.getElementById('colorpicker');
const eraserbtn = document.getElementById('eraserbtn');
const rainbowbtn = document.getElementById('rainbowbtn');
const colorbtn = document.getElementById('colorbtn');
let rainbowarr = ['#0029d9','#00ccff','#ff1106','#3ef400','#4c0c7b','#c61ca4'];
let color = STARTCOLOR;
let mode = STARTMODE;
createGrid(STARTSIZE);

//event listeners
colorbtn.addEventListener('click', colorMode);
eraserbtn.addEventListener('click', eraserMode);
rainbowbtn.addEventListener('click', rainbowMode);

resetbtn.addEventListener('click', () =>{
    reset();
    sizeslider.value = `${STARTSIZE}`;
    createGrid(STARTSIZE);
});

sizeslider.addEventListener('input', ()=>{
    let size = sizeslider.value;
    reset();
    createGrid(size);
});

colorpicker.addEventListener('input', ()=>{
    color = colorpicker.value;
});

//functions
function createGrid(r) {
    for (let i = 0; i < r * r; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", hoverColor);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
    sizedisp.innerText = `${r}x${r}`;
}

function hoverColor() {
    switch(mode){
        case 'color':
            this.style.backgroundColor = `${color}`;
            break;
        case 'rainbow':
            this.style.backgroundColor = `${rainbowarr[Math.floor(Math.random() * rainbowarr.length)]}`;
            break;
        case 'eraser':
            this.style.backgroundColor = 'white';
            break;
    }
}

function colorMode(){
    mode = 'color';
}

function eraserMode() {
    mode = 'eraser';
}

function rainbowMode(){
    mode = 'rainbow';
}

function reset() {
    grid.innerHTML = '';
}
