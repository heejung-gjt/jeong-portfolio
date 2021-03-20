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
  2-1. header 마크업    
  2-2. header 스타일링      
  2-3. nav 마크업            
  2-4. nav 스타일링
  2-5. about-me 마크업    
  2-6. about-me 스타일링      

3. 개선한 웹 사이트 구조 분석    

<br>

## 1. 웹 사이트를 리펙토링 하게 된 과정
HTML/CSS를 인터넷강의를 통하여 처음 접하게 되었습니다. 강의 중후반에 무언가를 만들어 보기로 결정하였고 나만의 웹사이트를 제작해보자라는 생각을 가지게 되었습니다. 그 후 아무런 설계와 과정없이 곧바로 코드를 작성하기 시작하였습니다. 가장 중요한 과정을 놓치고 제작을 하다보니 시간도 굉장히 오래걸렸습니다. 두달이라는 시간이 걸렸으며 절반 이상 완성되었을때 무언가 잘못되었다는 생각을 가졌지만 이미 오랜 기간이 지났고 무엇보다 혼자서 잘못된 부분을 고칠 자신이 없었습니다. 결국 결과는 도출했지만 무언가 찜찜했습니다. 그 후 부트캠프를 통해 HTML/CSS 수업을 다시 한번 들을 기회가 생겼습니다. 2주동안 HTML/CSS 수업을 들으면서 제가 혼자 공부했던 2달보다 훨씬 많은걸 배우고 적용할 수 있는 시간이었습니다. HTML/CSS의 설계 순서부터 웹접근성을 위한 마크업 순서, 올바른 시멘틱 마크업 설계와 반응형을 위한 CSS 스타일링까지 부족했던 부분을 채울 수 있었습니다. 후에 제가 만들었던 웹사이트를 다시 한번 보게 되었습니다. 제 눈에는 보이지 않았던 문제점들이 하나 둘씩 보이기 시작하였습니다. 어떤 방향으로 설계를 하면 더 효율적이겠다 라는 생각을 하게되었고 제가 배운것들을 활용해서 사이트를 리펙토링 해보고 싶었습니다.

<br>

## 2. 웹 사이트의 구조 분석

<br>

### 2-1. header 마크업

![header](https://user-images.githubusercontent.com/64240637/111857281-c4be9200-8973-11eb-9d95-5edeb11c0b8d.png)



1. 모든 컨텐츠에 동일한  width값 적용시키기 위해 div.container 태그를 사용
   
2.  header에 h1 숨김 제목 처리 
   
3.  article로 타이틀 인사말 마크업 , article h2 숨김 제목 처리, 각각의 인사말 문장 span으로 처리

4. div안에 a링크, 깃허브, 블로그 링크, 이미지는 fontawesome 참고, span태그 이용    

5. 화면이 780px이하인 경우 햄버거 버튼이 화면 상단 왼쪽에 위치할 수 있도록 header안에 마크업을 해주었다.  

<br>

### 2-2. header 스타일링

|레이아웃 배치|숨김콘텐츠 처리|background 이미지 처리|반응형 처리|
|------------|----------|---------|----------|
|<img src="https://user-images.githubusercontent.com/64240637/111627579-8a99a700-8832-11eb-8cae-ecec34062c94.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111626840-c97b2d00-8831-11eb-90fe-425a4c253406.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111627227-31317800-8832-11eb-9358-646f89e528f2.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111626827-c718d300-8831-11eb-8e46-79db8a33f89c.png" width=200px>|
|article안 span태그로 묶여져 있는 문장들에 flex를 주어 column 방향으로 배치될 수 있게 스타일링 하였다. align-items:center를 주어 화면의 가운데에 배치시켰다. line-height를 주어 각 span간 간격을 띄어주었다.|top:-9999px와 같이 날릴 수 있지만 웹접근성을 따졌을때 스크린리더에서 접근할때 화면 스크롤이 갑자기 떠버릴 수 있기 때문에 숨김콘텐츠로 사용할 수 있는 방법 중 clip 요소를 이용하는 방법을 선택하였다.  |header의 이미지를 가상요소선택자를 이용하여 배경이미지로 주었다. z-index:-1을 주어 화면 가장 뒤에 깔릴 수 있게 하였다.|780px과 420px를 기준으로 화면의 텍스트 크기를 조절하였고 햄버거 버튼이 보일 수 있도록 display:block를 주었다|

<br>

### 2-3. nav 마크업
![nav](https://user-images.githubusercontent.com/64240637/111856836-c9ce1200-8970-11eb-9cac-7611ca5e6e6d.png)


1. 메뉴바이므로 ```nav```로 마크업하였다.
   
2. 메뉴바의 아이템들을 ```ul>li```로 마크업하였다
   

![nav2](https://user-images.githubusercontent.com/64240637/111856838-ccc90280-8970-11eb-88c1-ae5f29629eec.png)

3. 780px이하인 경우 왼쪽 상단에 버튼이 생길 수 있게 ```button>span```으로 마크업하였다. 이때 아이콘은 header에 마크업하였다. 두번째 ```X```span태그에 텍스트로 작성한뒤 aria-hidden을 true로 적용시켜 스크린리더가 x를 텍스트 x로 읽지 못하게 해주었다.    

4. x는 "닫기" 버튼처럼 스타일되기 때문에 보조기기가 해당 버튼이 메뉴바를 닫는 역할임을 알려주기 위해 ```aria-label```을 메뉴닫기로 작성하였다 

<br>

### 2-4. nav 스타일링

|메뉴 레이아웃 배치|메뉴 아이템 레이아웃 배치|반응형 처리|
|------------|----------|---------|
|<img src="https://user-images.githubusercontent.com/64240637/111857366-53cbaa00-8974-11eb-849d-8d85df3fcc5a.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111857363-4e6e5f80-8974-11eb-8639-667b865fe79b.png" width=300px>|<img src="https://user-images.githubusercontent.com/64240637/111857368-562e0400-8974-11eb-9194-991d590d4f97.png" width=300px>|



