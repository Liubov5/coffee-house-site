let burger_menu_elem = document.querySelector(".burger-menu");
let nav_elem = document.querySelector("nav");
let header_elem = document.querySelector("header");
let body_elem = document.querySelector("body");
let burger_menu_icon_elem = document.querySelector(".burger-menu-icon");
let burger_click_status = false;

burger_menu_elem.addEventListener('click', ()=>{
    if(burger_click_status == false){
        nav_elem.style.right = "0%";
        nav_elem.style.top = header_elem.clientHeight +"px";
        body_elem.style.overflow = 'hidden'
        burger_menu_icon_elem.src = "images/button-icon-burger-close.png";
        burger_click_status = true
    }
    else if(burger_click_status == true){
       closeBurger();
    }   
})

function closeBurger(){
    nav_elem.style.right = "-100%";
    body_elem.style.overflow = 'auto'
    burger_menu_icon_elem.src = "images/button-icon-burger.png";
    burger_click_status = false;
}
