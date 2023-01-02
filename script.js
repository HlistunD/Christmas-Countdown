function cristmasCountdown() {
    const cristmasDate = new Date("December 25, 2023 00:00")
    const now = new Date();
    const dift = cristmasDate - now;
    console.log(dift)

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(dift/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((dift%msInDay) /msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinutes = Math.floor((dift%msInHour) /msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySecond = Math.floor((dift%msInMinute) /msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if( dift <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
        merryChristmas();
    }
}

let timerId = setInterval(cristmasCountdown, 1000)

function merryChristmas() {
    const heading = document.querySelector("h1")
    heading.textContent = "MERRY CHRISTMAS!!!";
    heading.classList.add("red")
}



