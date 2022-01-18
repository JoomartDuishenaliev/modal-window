const btn1 = document.querySelector('#call-me-btn1');
const btn2 = document.querySelector('#call-me-btn2');

function changeStyle (event) {
    btn2.style.backgroundColor = 'red';
}

btn1.addEventListener('click', changeStyle);
btn2.addEventListener('click', changeStyle);