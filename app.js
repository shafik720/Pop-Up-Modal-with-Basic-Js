const modalButton = document.querySelector('.wrapper button'),
section = document.querySelector('section'),
modalParent = document.querySelector('.modal-parent')
;



modalButton.addEventListener('click',()=>{
    modalParent.style.display = 'block';
    section.style.filter = "blur(10px)"
})