// DOM(Document Object Module)

/** 22부터 시작
 * https://www.youtube.com/watch?v=f0nBj0YMBUI&list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr&index=22
 */

// EventListner
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // }else {
    //     title.classList.add(CLICKED_CLASS);
    // } 

    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick)
}

init()