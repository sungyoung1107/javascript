/*****************************/
/****** 사진 슬라이드쇼 ******/
/*****************************/

// 사진 슬라이드쇼 이미지 사진 가져오기
var slides = document.querySelectorAll("#image > img");
// 버튼 ID 가져오기
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current); // 현재 사진만 보여주기

// 슬라이드
function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // 슬라이드 사진 갯수만큼 반복문을 돌려주면서 none 처리로 안보이게
  }
  slides[n].style.display = "block"; // 슬라이드 현재꺼만 보여줌
}

prev.onclick = prevSlide; // Dom을 이용한 이벤트 처리기, 함수 뒤에 () 괄호 없음
next.onclick = nextSlide; // Dom을 이용한 이벤트 처리기, 함수 뒤에 () 괄호 없음

function prevSlide() {
  if (current > 0) current -= 1; // 첫번째 페이지가 아니면 -1
  else current = slides.length - 1; // 첫번째 페이지면 마지막으로
  showSlides(current);
}

function nextSlide() {
  // 마지막 페이지가 아니면 // slides.length가 '4' // current < 3
  if (current < slides.length - 1) current += 1;
  // 마지막 페이지이면 다시 0으로
  else current = 0;
  showSlides(current);
}

/*****************************/
/********* 하트 구현 *********/
/*****************************/

var loveCount = 0;

let love = document.querySelector("#love"); //텅빈 하트의 요소를 가져오겠단 의미
love.onclick = changePic; // love를 클릭하면 함수를 실행하겠단 의미
function changePic() {
  if (loveCount == 0) {
    love.src = "img/red_love.png"; /* 카운트가 0일 때 빨간색으로 */
    loveCount++;
    document.querySelector(".goodCounts").innerHTML =
      "&nbsp&nbsp" + "좋아요" + "&nbsp" + loveCount + "&nbsp" + "개";
  } else {
    love.src = "img/alarmButton.png"; /* 카운트가 1일 때 원래색으로 */
    loveCount--;
    document.querySelector(".goodCounts").innerHTML =
      "&nbsp&nbsp" + "좋아요" + "&nbsp" + loveCount + "&nbsp" + "개";
  }
}

/*****************************/
/******** 스크랩 구현 ********/
/*****************************/

var scrabCount = 0;

let scrab = document.querySelector("#scrab"); //텅빈 하트의 요소를 가져오겠단 의미
scrab.onclick = changePic2; // love를 클릭하면 함수를 실행하겠단 의미
function changePic2() {
  if (scrabCount == 0) {
    scrab.src = "img/black_scrabButton.png"; /* 카운트가 0일 때 빨간색으로 */
    scrabCount++;
  } else {
    scrab.src = "img/scrabButton.png"; /* 카운트가 1일 때 원래색으로 */
    scrabCount--;
  }
}

/*****************************/
/******* 설정 창 띄우기 ******/
/*****************************/

var target = document.querySelectorAll(".set_open");
var btnPopClose = document.querySelectorAll(".set_close");

var targetID;

// 모드 팝업 열기
for (var i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function () {
    targetID = this.getAttribute("href");
    document.querySelector(targetID).style.display = "block";
  });
}
/*
target[0].getAttribute("href") : '#desc'
target[1].getAttribute("href") : '#share' */

// 팝업 닫기
for (var j = 0; j < btnPopClose.length; j++) {
  btnPopClose[j].addEventListener("click", function () {
    this.parentNode.parentNode.style.display = "none";
  });
} //parentNode를 하나만 쓰면 (div) 버튼만 없어짐
// parentNode를 두개 쓰면 (div#desc, div#share)

/*****************************/
/********* 모드 전환  ********/
/*****************************/

var darkMode = document.querySelector(".dark"); /* 다크모드 버튼 */
var whiteMode = document.querySelector(".white"); /* 화이트모드 버튼 */

/* length 1인 경우 querySelector만 가능, querySelectorAll은 불가 */
var backgroundCol =
  document.querySelector(
    ".container"
  ); /* 컨테이너 가져오기 */ /* length 1 NodeList [div.container] */

var backgroundNav =
  document.querySelector(
    ".nav"
  ); /* 자식노드 NodeList(7) [text, comment, text, div.logo, text, div.leftMenu, text] */

var backgroundSec =
  document.querySelector(
    ".section"
  ).childNodes; /* NodeList(7) [text, comment, text, div.content1, text, div.content2, text] */

var backgroundAside = document.querySelector(".aside").childNodes;
/* NodeList(34) [text, comment, text, div.myAnotherId, text, div.recommend, text, comment, text, div.myAnotherId, text, comment, text, div.myAnotherId, text, comment, text, div.myAnotherId, text, comment, text, div.myAnotherId, text, comment, text, div.myAnotherId, text, br, br, text, comment, text, div.foot, text] */

darkMode.onclick = changeColor;
whiteMode.onclick = changeColor;

function changeColor() {
  if (
    document.querySelector("input[type=radio][name=set]:checked").value ==
    "dark"
  ) {
    backgroundCol.style.backgroundColor = "black"; /* "rgb(000, 000, 051)" */
    backgroundCol.style.border = "black";
    backgroundNav.style.backgroundColor = "rgb(204, 204, 255)";
    backgroundNav.style.border = "rgb(204, 204, 255)";

    for (var x = 0; x < backgroundSec.length; x++) {
      if (backgroundSec[x].nodeName == "DIV") {
        /* 대문자 DIV만 가능 */
        backgroundSec[x].style.backgroundColor = "rgb(204, 204, 204)";
        backgroundSec[x].style.border = "rgb(204, 204, 204)";
      }
    }
    for (var y = 0; y < backgroundAside.length - 2; y++) {
      /* foot은 제외 */
      if (backgroundAside[y].nodeName == "DIV") {
        backgroundAside[y].style.backgroundColor = "rgb(204, 204, 204)";
        backgroundAside[y].style.border = "rgb(204, 204, 204)";
      }
    }
  } else {
    backgroundCol.style.backgroundColor = "white";
    backgroundNav.style.backgroundColor = "white";
    backgroundNav.style.border = "1px solid rgb(191, 196, 196)";

    for (var x = 0; x < backgroundSec.length; x++) {
      if (backgroundSec[x].nodeName == "DIV") {
        /* 대문자 DIV만 가능 */
        backgroundSec[x].style.backgroundColor = "white";
        backgroundSec[x].style.border = "1px solid rgb(191, 196, 196)";
      }
    }
    for (var y = 0; y < backgroundAside.length - 2; y++) {
      /* foot은 제외 */
      if (backgroundAside[y].nodeName == "DIV") {
        backgroundAside[y].style.backgroundColor = "white";
        backgroundAside[y].style.border = "1px solid rgb(191, 196, 196)";
      }
      /* 개별적으로 지정해줌 */ /* 방법찾기 */
      if (y == 5) {
        backgroundAside[y].style.backgroundColor = "rgb(242, 245, 245)";
        backgroundAside[y].style.border = "1px solid rgb(231, 235, 235)";
      }
    }
  }
}

/*****************************/
/******** 사용자 전환 ********/
/*****************************/
