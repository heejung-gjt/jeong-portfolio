'use strict';

const home_box = document.querySelector('.home__box');
const homeHeight =home_box.getBoundingClientRect().height;
const navi = document.querySelector('#navi');
const menus = document.querySelector('.gnb__menu');
const navbarMenu = document.querySelector('.navi__gnb');
const home = document.querySelector('#home');
const main_words=document.querySelector('.two');
const about__me = document.querySelector('.about__me');
const about__infor = document.querySelector('.about__infor');
const about__stack = document.querySelector('.about__stack');
const about__box=document.querySelector('#about');
const aboutHeight =about__box.getBoundingClientRect().height;
const skill__info = document.querySelector('.skill__info');
const skill__logo = document.querySelector('.skill__logo');
const stack__box = document.querySelector('.stack__box');
const skill__box=document.querySelector('#skills');
const skillHeight = skill__box.getBoundingClientRect().height;
const project__show= document.querySelector('.project__show');
const project__box=document.querySelector('#project');
const projectHeight = project__box.getBoundingClientRect().height;
const education= document.querySelector('.education');
const study= document.querySelector('.study');
const ABOUT_SCROLL =  homeHeight/1.5;
const SKILL_SCROLL = aboutHeight+homeHeight;
const PROJECT_SCROLL =skillHeight+SKILL_SCROLL;
const EDUCATION_SCROLL =projectHeight+PROJECT_SCROLL;

//메뉴바 스크롤 컨트롤
document.addEventListener('scroll',() =>{

    if(window.scrollY > homeHeight){
        navi.classList.add('navi--dark');
    }else{
        navi.classList.remove('navi--dark')
    }
});

//메뉴바 클릭시 해당 content로 스크롤
navbarMenu.addEventListener('click',()=>{
    const target =event.target;
    const link = target.dataset.link; // == html의 data-link
    if(link==null){
        return;
    }
    scrollIntoView(link);

});
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

// home에 단어 4초에 한번씩 change
var text =['노력하는','성장하는'];
var i =0;
setInterval(function(){
    i=1-i;
    main_words.innerText=text[i];
},4000);

// 스크롤 내리면 section 별로 내용 보이기 
window.addEventListener('scroll',()=>{
    const window_scrollY = window.scrollY;
    downScroll(window_scrollY);
});

function downScroll(window_scrollY){
    if(window.scrollY > homeHeight/1.5){
        about__infor.classList.add('change');
        about__me.classList.add('change');
        about__stack.classList.add('change');
    }if(window.scrollY > SKILL_SCROLL){
        skill__info.classList.add('change');
        skill__logo.classList.add('change');
        stack__box.classList.add('change');
    }if(window.scrollY > PROJECT_SCROLL){
        project__show.classList.add('change');
    }if(window.scrollY > (EDUCATION_SCROLL)){
        education.classList.add('change');
        study.classList.add('change');
    }

}