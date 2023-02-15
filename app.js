const collapsing=document.querySelector('.collapsing');
const head=document.querySelector('.head')
const getEl=document.querySelector('.items');
getEl.addEventListener('mouseover',(e)=>{
    head.classList.toggle('collapsing');
});

getEl.addEventListener('mouseout',(e)=>{
    head.classList.toggle('collapsing');
});