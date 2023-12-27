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
function detectMob() {
    if ((window.innerWidth <= 1000)) {
        document.getElementById('demo').innerHTML = ` <div class="row p-0 m-0 font-size-list">
        <div class="col-6 p-0 m-0"><button class="get-note color-white p-4">Get Sample
        Notes</button></div>
        <div class="col-6 p-0 m-0">
        <a href="#price" class="check-price p-4">Check Pricing</a>
        </div>
        </div>`
    }
}
detectMob()

updateCounter();
setInterval(updateCounter, 1000);