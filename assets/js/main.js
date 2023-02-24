let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let body = document.querySelector('body');

sun.addEventListener('click', sunOff);
moon.addEventListener('click', sunOn);

function sunOff () {
    body.style.backgroundColor = "black";
    sun.style.display = "none";
    moon.style.display = "block";
}

function sunOn () {
    body.style.backgroundColor = "white";
    sun.style.display = "block";
    moon.style.display = "none";
}