const showDiv = document.querySelector('#showDiv');
const hiddenDiv = document.querySelector('#hiddenDiv');
const hideDiv = document.querySelector('#hideDiv');

function turnVisible () {
    hiddenDiv.style.visibility = '';
}

function turnHidden () {
    hiddenDiv.style.visibility = 'hidden';
}

showDiv.addEventListener('click', turnVisible);
hideDiv.addEventListener('click', turnHidden);