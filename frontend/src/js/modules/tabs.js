function tabs() {
    const tabs = document.querySelectorAll("[data-tab]");
    const btnTabs = document.querySelectorAll("#guitars .nav-link");

    tabs.forEach((e) => {
        e.style.display = "none";
    });

    tabs[0].style.display = "block";

    console.log(btnTabs);

    btnTabs.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target) {
                show(item);
            }
        });
    })

    function show(item) {
        tabs.forEach(i => i.style.display = "none");
        btnTabs.forEach(i => {
            if (i.classList.contains("active")) {
                i.classList.remove("active");
            }
        });


        const btnAttribute = item.getAttribute("href").slice(1);

        item.classList.add("active");

        tabs.forEach(e => {
            if (e.id === btnAttribute) {
                e.style.display = "block";
            }
        });
    }
}

export default tabs;