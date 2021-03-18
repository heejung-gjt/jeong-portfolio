'use strict';

const nav = document.querySelector('.navigation');
const ham = document.querySelector('.ir');
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
    }
    else{
        nav.style.transform = `translateX(${0}px)`;
    }
})