const menuBtn = document.getElementById('menu-btn');
const sideMenu= document.getElementById('side-menu');

menuBtn.addEventListener('click', ()=>{
    sideMenu.classList.toggle('hidden');
})



// const str = ["2022-09-13T09:40:00.000000Z","2022-09-13T09:40:00.000000Z",null,"2022-09-13T09:40:00.000000Z"]

// let part = str[2]?.split('T')[0];
// console.log(part);