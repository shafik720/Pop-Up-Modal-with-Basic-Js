const modalButton = document.querySelector('.wrapper button'),
section = document.querySelector('section'),
crossBtn = document.querySelector('.cross'),
modalParent = document.querySelector('.modal-parent')
;



modalButton.addEventListener('click',()=>{
    modalParent.style.display = 'block';
    section.style.filter = "blur(10px)"
})

crossBtn.addEventListener('click',()=>{
    modalParent.style.display = 'none';
    section.style.filter = "blur(0)"
})