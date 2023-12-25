const dueTime = new Date("December 27, 2023 23:59:59").getTime();

function padNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

function updateCounter() {
    const now = new Date().getTime();

    const remainingTime = dueTime - now;

    const days = padNumber(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
    const hours = padNumber(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = padNumber(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = padNumber(Math.floor((remainingTime % (1000 * 60)) / 1000));

    document.getElementById("timer").innerText = `${days} : ${hours} : ${minutes} : ${seconds}`;

    if (remainingTime < 0) {
        document.getElementById("timer").innerText = "Time's up!";
    }
}

updateCounter();
setInterval(updateCounter, 1000);