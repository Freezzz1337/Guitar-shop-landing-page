function header() {
    const menuBtn = document.querySelector(".navbar-toggler");
    const navbarContent = document.querySelector("#navbarContent");

    menuBtn.addEventListener("click", (e) => {

        if (navbarContent.classList.contains("show")) {
            navbarContent.classList.remove("show");
        } else {
            navbarContent.classList.add("show");
        }
    });
}

export default header;