/******************************/
/* ID / PW 입력시 버튼 활성화 */
/******************************/

var buttonSubmit = document.querySelector("#loginBox");
var inputId = document.querySelector("#idBox");
var inputPw = document.querySelector("#pwBox");

// let disabledCount = 0;

// inputId.onkeyup = loginConfirm;
// inputPw.onkeyup = loginConfirm;

inputId.addEventListener("keyup", loginConfirm);
inputPw.addEventListener("keyup", loginConfirm);

// inputId.addEventListener("reset", print);
// inputPw.addEventListener("reset", print);

function loginConfirm() {
  if (!(inputId.value && inputPw.value)) {
    buttonSubmit.disabled = true; // false비활성화
    buttonSubmit.style.cursor = "none";
    buttonSubmit.style.color = "white";
    buttonSubmit.style.backgroundColor = "black";
    buttonSubmit.style.border = "3px solid white";
  } else {
    buttonSubmit.disabled = false; // true면 활성화
    buttonSubmit.style.cursor = "pointer";
    buttonSubmit.style.color = "rgb(77, 76, 76)";
    buttonSubmit.style.backgroundColor = "#fadb60";
  }
}

// function print() {
//   console.log("출력");
// }

/*****************************/
/***** ID / PW 형식 체크 *****/
/*****************************/
buttonSubmit.onclick = loginTest;

function loginTest() {
  /* 이메일 형식 체크 */
  if (inputId.value.includes("@")) {
  } else {
    alert("이메일 형식이 아닙니다.");
    return false;
  }

  /* 비밀번호 길이 체크 */
  if (inputPw.value.length < 8) {
    alert("비밀번호는 8자리 이상입니다.");
    return false;
  }

  if (!(inputId.value && inputPw.value)) {
    alert("아이디와 비밀번호는 필수 입력입니다.");
    return false;
  } else {
    return true;
  }
}
