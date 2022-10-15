
const modalParent = document.querySelector('.modal-parent'),
section = document.querySelector('section'),
crossBtn = document.querySelector('.cross'),
button = document.querySelector('.wrapper button')
;

button.addEventListener('click',()=>{
    modalParent.style.display = 'block';
    section.style.filter = 'blur(10px)'
})

crossBtn.addEventListener('click',()=>{
    modalParent.style.display = 'none';
    section.style.filter = 'blur(0)';
})

modalParent.addEventListener('click',(e)=>{
    if(e.target.className == 'modal-parent'){
        modalParent.style.display = 'none';
        section.style.filter = 'blur(0)';
    }
})