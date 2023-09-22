"use strict";
function progressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const body = document.body;
    const html = document.documentElement;
    let pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    let pageWidth = window.innerWidth;

    function currentProgress() {
        if (pageWidth === window.innerWidth) {
            const scroll = window.scrollY;
            const scrollPercentage = (scroll / (pageHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercentage + "%";
        } else {
            pageWidth = window.innerWidth;
            pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);
        }
    }

    currentProgress();
    window.addEventListener("scroll", currentProgress);
}

export default progressBar;