const btn = document.querySelector(".btn")
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const msgHex = document.querySelector('h3')
const name1 = document.querySelector('.color1-name')
const name2 = document.querySelector('.color2-name')
const h2 = document.querySelector('h2')

let turn = 1;

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

const onChangeInput = (e) => {
    const inputValue = e.target.value
    if (inputValue < 0 || inputValue > 255) {
        alert('Please insert number from 0 to 255.');
        e.target.value = '';
    }
}

input1.addEventListener('change', onChangeInput)
input2.addEventListener('change', onChangeInput)
input3.addEventListener('change', onChangeInput)

btn.addEventListener('click', () => {


    v1 = input1.value
    v2 = input2.value
    v3 = input3.value
    console.log(`${v1} ${v2} ${v3}`);

    if (turn === 1) {
        color1.style.background = `rgb(${v1}, ${v2}, ${v3})`;
        color2.classList.add('my-turn');
        color1.classList.remove('my-turn');
        name1.innerHTML = rgbToHex(v1, v2, v3);
        turn = 2;
    } else {
        color2.style.background = `rgb(${v1}, ${v2}, ${v3})`;
        color1.classList.add('my-turn');
        color2.classList.remove('my-turn');
        name2.innerHTML = rgbToHex(v1, v2, v3);
        turn = 1;
    }

    input1.value = '';
    input2.value = '';
    input3.value = '';
})

color1.addEventListener('click', (e) => {
    turn = 1;
    e.target.classList.add('my-turn');
    color2.classList.remove('my-turn');
})

color2.addEventListener('click', () => {
    turn = 2;
    color2.classList.add('my-turn');
    color1.classList.remove('my-turn');
})


//-------=-=-=-=-=-=-=-=-=-=-=-=-=------
h2.addEventListener('click', () => {
    alert('Hello my Friend!')
})