## 올바른 시멘틱 마크업과 웹 접근성을 고려해 리펙토링한 포트폴리오 웹사이트

## 사용언어    

- HTML5
- CSS3
- JavaScript

## 기간    
- 210306 ~ 진행중

## 목차

1. 웹 사이트를 리펙토링 하게 된 과정   

2. 전체적인 웹 사이트의 구조 분석    
  2-1. 콘텐츠의 논리적인 흐름 분석    
  2-2. 마크업의 문제점   
  2-3. 네이밍의 문제점      
  2-4. 레이아웃 설계 분석   

3. 개선한 웹 사이트 구조 분석    

<br>

## 1. 웹 사이트를 리펙토링 하게 된 과정
HTML/CSS를 인터넷강의를 통하여 처음 접하게 되었습니다. 강의 중후반에 무언가를 만들어 보기로 결정하였고 나만의 웹사이트를 제작해보자라는 생각을 가지게 되었습니다. 그 후 아무런 설계와 과정없이 곧바로 코드를 작성하기 시작하였습니다. 가장 중요한 과정을 놓치고 제작을 하다보니 시간도 굉장히 오래걸렸습니다. 두달이라는 시간이 걸렸으며 절반 이상 완성되었을때 무언가 잘못되었다는 생각을 가졌지만 이미 오랜 기간이 지났고 무엇보다 혼자서 잘못된 부분을 고칠 자신이 없었습니다. 결국 결과는 도출했지만 무언가 찜찜했습니다. 그 후 부트캠프를 통해 HTML/CSS 수업을 다시 한번 들을 기회가 생겼습니다. 2주동안 HTML/CSS 수업을 들으면서 제가 혼자 공부했던 2달보다 훨씬 많은걸 배우고 적용할 수 있는 시간이었습니다. HTML/CSS의 설계 순서부터 웹접근성을 위한 마크업 순서, 올바른 시멘틱 마크업 설계와 반응형을 위한 CSS 스타일링까지 부족했던 부분을 채울 수 있었습니다. 후에 제가 만들었던 웹사이트를 다시 한번 보게 되었습니다. 제 눈에는 보이지 않았던 문제점들이 하나 둘씩 보이기 시작하였습니다. 어떤 방향으로 설계를 하면 더 효율적이겠다 라는 생각을 하게되었고 제가 배운것들을 활용해서 사이트를 리펙토링 해보고 싶었습니다.

<br>

## 2. 웹 사이트의 구조 분석

<br>

### header 마크업

![header](https://user-images.githubusercontent.com/64240637/111625942-c3d11780-8830-11eb-86b9-b6cea0ebcc0f.png)


1. 모든 컨텐츠에 동일한  width값 적용시키기 위해 div.container 태그를 사용
   
2.  header에 h1 숨김 제목 처리 
   
3.  article로 타이틀 인사말 마크업 , article h2 숨김 제목 처리, 각각의 인사말 문장 span으로 처리

4. div안에 a링크, 깃허브, 블로그 링크, 이미지는 fontawesome 참고, span태그 이용    

5. 화면이 780px이하인 경우 햄버거 버튼이 화면 상단 왼쪽에 위치할 수 있도록 header안에 마크업을 해주었다.  

<br>

### header 스타일링

|레이아웃 배치|숨김콘텐츠 처리|background 이미지 처리|반응형 처리|
|------------|----------|---------|----------|
|<img src="https://user-images.githubusercontent.com/64240637/111627579-8a99a700-8832-11eb-8cae-ecec34062c94.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111626840-c97b2d00-8831-11eb-90fe-425a4c253406.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111627227-31317800-8832-11eb-9358-646f89e528f2.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111626827-c718d300-8831-11eb-8e46-79db8a33f89c.png" width=200px>|
|article안 span태그로 묶여져 있는 문장들에 flex를 주어 column 방향으로 배치될 수 있게 스타일링 하였다. align-items:center를 주어 화면의 가운데에 배치시켰다. line-height를 주어 각 span간 간격을 띄어주었다.|top:-9999px와 같이 날릴 수 있지만 웹접근성을 따졌을때 스크린리더에서 접근할때 화면 스크롤이 갑자기 떠버릴 수 있기 때문에 숨김콘텐츠로 사용할 수 있는 방법 중 clip 요소를 이용하는 방법을 선택하였다.  |header의 이미지를 가상요소선택자를 이용하여 배경이미지로 주었다. z-index:-1을 주어 화면 가장 뒤에 깔릴 수 있게 하였다.|780px과 420px를 기준으로 화면의 텍스트 크기를 조절하였고 햄버거 버튼이 보일 수 있도록 display:block를 주었다|
