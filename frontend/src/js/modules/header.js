"use strict";
function header() {
    const menuBtn = document.querySelector(".navbar-toggler");
    const navbarContent = document.querySelector("#navbarContent");
    const btnNavbar = document.querySelectorAll("[data-header-btn] a.nav-link");
    const headerHeight = document.querySelector("header").offsetHeight;

    menuBtn.addEventListener("click", (e) => {

        if (navbarContent.classList.contains("show")) {
            navbarContent.classList.remove("show");
        } else {
            navbarContent.classList.add("show");
        }
    });



    btnNavbar.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetOffset = targetElement.getBoundingClientRect().top;

                window.scrollTo({
                    top: window.pageYOffset + targetOffset - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });


}

export default header;