const btn = document.getElementById('btn-right');
const slide = document.querySelectorAll('.slide');

btn.addEventListener('click', shiftLeft);


function shiftLeft() {
    for (var i = 0; i < slide.length; i++) {
        slide[i].classList.add('active')
    }
    console.log('hello')
};

// function shiftRight() {
//     for (var i = 0; i < slide.length; i++) {
//         slide[i].classList.add
//     }
// }






