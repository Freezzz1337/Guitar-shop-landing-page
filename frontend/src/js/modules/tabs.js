import {modalForOrder} from "./modals";

function tabs() {
    const tabs = document.querySelectorAll("[data-tab]");
    const btnTabs = document.querySelectorAll("#guitars .nav-link");

    tabs.forEach((e) => {
        e.style.display = "none";
    });

    tabs[0].style.display = "block";
    addEventToBtn(tabs[0], tabs[0].getAttribute("id"));

    btnTabs.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target) {
                show(item);
            }
        });
    })

    function show(item) {
        const btnAttribute = item.getAttribute("href").slice(1);

        tabs.forEach(i => i.style.display = "none");
        btnTabs.forEach(i => {
            if (i.classList.contains("active")) {
                i.classList.remove("active");
            }
        });

        item.classList.add("active");

        tabs.forEach(e => {
            if (e.id === btnAttribute) {

                addEventToBtn(e, btnAttribute);

                e.style.display = "block";
            }
        });
    }

    function addEventToBtn(tabSelector, btnAttribute) {
        const btns = tabSelector.querySelectorAll("button");
        console.log(btnAttribute);
        btns.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();


                modalForOrder(btnAttribute);
            })
        })
    }

}

export default tabs;