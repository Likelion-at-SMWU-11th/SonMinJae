const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dates = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");     
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `현재시각은 ${year}년 ${month}월 ${dates}일 ${hours}시 ${minutes}분 ${seconds}초입니다.`;
}

getClock();
setInterval(getClock, 1000);