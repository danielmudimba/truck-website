const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("open");
    menu.classList.toggle("dropped");
})

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click",()=> {
    hamMenu.classList.toggle("active");
})

