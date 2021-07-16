// DOM(Document Object Module)

/* Memo
18강부터 시작
https://www.youtube.com/watch?v=LnuLDGO5848&list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr&index=18
*/

// EventListner 1

function handleResize(event) {
    // 현재 작동하는 이벤트 출력
    console.log(event) 
}

window.addEventListener("resize", handleResize()); // handleResize 함수를 지금 즉시 호출
window.addEventListener("resize", handleResize); // handleResize 함수를 resize 시 호출

// EventListner 2
const title = document.querySelector("#title");
const BASIC_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(154, 236, 219)";

function handleClick() {
    if(title.style.color === BASIC_COLOR) {
        title.style.color = OTHER_COLOR
    } else {
        title.style.color = BASIC_COLOR
    }
    console.log(title.style.color)
}

// 초기화 함수
function init() {
    title.style.color = BASIC_COLOR;
    title.addEventListener("mouseenter", handleClick)
}

init();

// EventListener 3

function handleOffline() {
    console.log("Offline~")
}

function handleOnline() {
    console.log("Online~")
}

window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);