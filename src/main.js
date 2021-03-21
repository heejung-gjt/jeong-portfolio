'use strict';

const nav = document.querySelector('.navigation');
const ham = document.querySelector('.ir');
const headerHeight = document.querySelector('.header');
const homeHeight =headerHeight.getBoundingClientRect().height;
let mql = window.matchMedia('screen and (max-width: 780px)');

// nav 반응형 
function open_menu_button(){
    nav.style.transform = `translateX(${0}px)`;
}
function close_menu_button(){
    nav.style.transform = `translateX(${-105}vw)`;
}
mql.addListener(function(e){
    if(e.matches){
        nav.style.transform = `translateX(${-105}vw)`;
        nav.classList.remove('nav-scroll');
    }else nav.style.transform = `translateX(${0}px)`;
});

//메뉴바 스크롤 컨트롤
document.addEventListener('scroll',() =>{
    if(window.scrollY > homeHeight){
        if(window.innerWidth < 780) nav.classList.remove('nav-scroll');
        else nav.classList.add('nav-scroll');
    }else nav.classList.remove('nav-scroll');
});

