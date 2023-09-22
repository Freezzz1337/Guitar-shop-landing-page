"use strict";
function carousel() {
    const carousels = document.querySelectorAll(".carousel-item");
    const carouselIndicators = document.querySelectorAll("[data-bs-target='#carouselExampleCaptions']");
    const nextButton = document.querySelector(".carousel-control-next-icon");
    const prevButton = document.querySelector(".carousel-control-prev-icon");

    let currentSlide = 0;
    let maxSlides = carousels.length - 1;
    let timerId;

    timerForCarousel();

    prevButton.addEventListener("click", () => {
        updateSLide(currentSlide, currentSlide === 0 ? currentSlide = maxSlides : --currentSlide);
    });


    nextButton.addEventListener("click", () => {
        updateSLide(currentSlide, currentSlide < maxSlides ? ++currentSlide : 0);
    })


    carouselIndicators.forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target) {
                updateSLide(currentSlide, +item.getAttribute("data-bs-slide-to"));
            }
        });
    });


    function updateSLide(currentIndex, newIndex) {
        timerForCarousel(true);

        carousels[currentIndex].classList.remove("active");
        carouselIndicators[currentIndex].classList.remove("active");

        currentSlide = newIndex;

        carousels[currentSlide].classList.add("active");
        carouselIndicators[currentSlide].classList.add("active");
    }

    function timerForCarousel(check = false) {

        function start() {
            timerId = setInterval(function () {
                updateSLide(currentSlide, currentSlide < maxSlides ? ++currentSlide : 0);
            }, 3500);
        }

        if (check) {
            clearInterval(timerId);
            start();
        }else {
            start();
        }
    }
}

export default carousel;