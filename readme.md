<h2> 올바른 시멘틱 마크업과 웹 접근성을 고려하여 리펙토링한 포트폴리오 웹 사이트입니다.</h2>

<br>

__[사용언어]__    

- HTML5
- CSS3
- JavaScript

<br>

__[목차]__   

- 초기 HTML 마크업 문제점 분석   
  * header   
  * navigation
  * about 
  * skill
  * project
  * education
  * study    

- 초기 CSS 설계 분석   

- 개선된 HTML 마크업 분석   
  * header   
  * navigation
  * about 
  * skill
  * project
  * education
  * study   

- 개선된 CSS 설계 분석    


* * *
__1. 초기 HTML 마크업 분석__    
<br>

1-1. header 
|HTML 마크업|CSS 적용|ERROR|
|----------|-------|-----|
|<img src="https://user-images.githubusercontent.com/64240637/110213223-6b218680-7ee2-11eb-97f5-660aecc0eff7.png" width="400px" height="300px">|<img src="https://user-images.githubusercontent.com/64240637/110213105-f3535c00-7ee1-11eb-8be8-ef1be866cb39.png" width="600px">|<img src="https://user-images.githubusercontent.com/64240637/110213344-f733ae00-7ee2-11eb-9b37-64fcd4b31f02.png" width="600px">|
<br>

1-2. header HTML마크업 문제점
```html
<div class="bg">
  <div class="container">
    <section id="home">
      <header class="home__box">
        <img src="src/image/1.png" alt="">
        <article class="home__intro">
          <h1>SON HEE JEONG</h1>
          <article class="intro">
            <p>반갑습니다.</p>
            <div class="one"> 항상</div>
            <div class="two"> 노력하는 </div>
            <div class="three">개발자 손희정입니다</div>
          </article>
        </article>
        <article class="home__icon">
          <a href="https://github.com/heejung-gjt" target="_blank"><i class="fab fa-github" id="homeicon"></i></a>
          <a href="https://heejung-gjt.github.io/" target="_blank"><i class="fab fa-blogger-b" id="homeicon"></i></a>
        </article>
      </header>
    </section>
  </div>
</div>
```
1. 필요없는 div태그의 사용 - HTML을 코드로 작성하기 전 설계에 대한 시간이 충분하지 않아 필요없는 태그를 남용하였다.   
2. 시멘틱 마크업의 이해 부족 - 시멘틱 태그의 역할을 완벽히 숙지하지 않아 요소에 어울리지 않는 곳에 사용하였다.   
3. 지키지 않은 웹 접근성 - 초기에 사이트를 만들때 웹 접근성이 무엇인지 알지 못하였다.   
<br>

1-3. header CSS 설계 분석    

1. 글로벌 속성을 지정하여 자주 쓰는 색이나 font-size를 지정하여 var()를 이용하여 사용하였다.
2. position을 이용해 이미지위에 문장들을 위치시켰다.   
3. 구체성을 따지지 않고 태그로 속성을 적용시켰다.   

