function timer(deadline) {
    const timer = document.querySelector("#timer");

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function addZero(num) {
        return num > 0 && num < 10 ? `0${num}` : num;
    }

    function setClock(timerSelector, endTime) {
        const days = timerSelector.querySelector("#days");
        const hours = timerSelector.querySelector("#hours");
        const minutes = timerSelector.querySelector("#minutes");
        const seconds = timerSelector.querySelector("#seconds");
        let timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getTimeRemaining(endTime);
            days.innerHTML = addZero(time.days);
            hours.innerHTML = addZero(time.hours);
            minutes.innerHTML = addZero(time.minutes);
            seconds.innerHTML = addZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    }

    setClock(timer, deadline);

}

export default timer;