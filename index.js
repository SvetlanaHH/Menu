const navbarEl = document.querySelector(".navbar");

const menuGrid = document.querySelector(".menu-grid");

const MenuButton = document.querySelector(".MenuButton");
window.addEventListener("scroll",()=>{
     if(window.scrollY > menuGrid.offsetTop - navbarEl.offsetHeight - 50){
            navbarEl.classList.remove("active");
     }else{
        navbarEl.classList.add("active");
     }
});
