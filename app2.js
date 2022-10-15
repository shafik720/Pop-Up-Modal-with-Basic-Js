
const modalParent = document.querySelector('.modal-parent'),
section = document.querySelector('section'),
button = document.querySelector('.wrapper button')
;

button.addEventListener('click',()=>{
    modalParent.style.display = 'block';
    section.style.filter = 'blur(10px)'
})
