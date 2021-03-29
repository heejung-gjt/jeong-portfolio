'use strict';

const nav = document.querySelector('.navigation');
let mql = window.matchMedia('screen and (max-width: 780px)');

// nav 반응형 스타일
const open_menu_button = () => nav.style.transform = `translateX(${0}px)`;
const close_menu_button = () => nav.style.transform = `translateX(${-105}vw)`;
// nav 화면크기에 따른 제어
mql.addListener(e => {
    if(e.matches){
        nav.style.transform = `translateX(${-105}vw)`;
        nav.classList.remove('nav-scroll');
    }else nav.style.transform = `translateX(${0}px)`;
}); 
//nav 스크롤 컨트롤
document.addEventListener('scroll',() =>{
    const headerHeight = document.querySelector('.header');
    const homeHeight =headerHeight.getBoundingClientRect().height;
    if(window.scrollY > homeHeight){
        window.innerWidth < 780 ? nav.classList.remove('nav-scroll') : nav.classList.add('nav-scroll')
    }else nav.classList.remove('nav-scroll');
});

