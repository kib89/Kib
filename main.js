let endTime = new Date("01/01/2024 00:00:00").getTime();

console.log(endTime);

let time = setInterval(() => {
    let nowTime = new Date().getTime();
    let distance = endTime - nowTime;

    let day = Math.floor(distance / (24*60*60*1000)),
        hour = Math.floor((distance % (24*60*60*1000)) / (60*60*1000)),
        minute = Math.floor((distance % (60*60*1000)) / (60*1000)),
        second = Math.floor((distance % (60*1000)) / (1000));

        document.querySelector(".days").innerText = day;
        document.querySelector(".hours").innerText = hour;
        document.querySelector(".minutes").innerText = minute;
        document.querySelector(".seconds").innerText = second;
},1000)