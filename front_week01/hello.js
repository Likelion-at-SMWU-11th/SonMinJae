const loginForm = document.querySelector("#login-form");   
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");

function loggedIn(event){
    event.preventDefault();
    loginForm.classList.add("hidden");  // 요소에 "hidden"이라는 이름의 class 추가
    const userName = loginInput.value;
    hello.innerText = `Login Completed! Hello ${userName} .`; 
    hello.classList.remove("hidden");
}

loginForm.addEventListener("complete", loggedIn);   // "complete" 이벤트 만들기