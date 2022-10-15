const modalButton = document.querySelector('.wrapper button'),
modalParent = document.querySelector('.modal-parent')
;



modalButton.addEventListener('click',()=>{
    modalParent.style.display = 'block';
})