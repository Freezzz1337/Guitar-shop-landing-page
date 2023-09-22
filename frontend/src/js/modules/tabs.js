"use strict";

import {modalForOrderFunction} from "./modals";
import {getAcousticGuitars, getBasGuitars, getElectricGuitars, getPopularGuitars} from "./serverRequests";

function tabs() {
    const btnTabs = document.querySelectorAll("#guitars .nav-link");

    tab("popular", getPopularGuitars);

    btnTabs.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target) {
                show(item);
            }
        });
    });

    async function show(item) {
        const btnAttribute = item.getAttribute("href").slice(1);

        const tabDataMap = {
            "popular": getPopularGuitars,
            "acoustic": getAcousticGuitars,
            "electric": getElectricGuitars,
            "bas": getBasGuitars
        };

        btnTabs.forEach(i => {
            if (i.classList.contains("active")) {
                i.classList.remove("active");
            }
        });
        item.classList.add("active");

        if (btnAttribute in tabDataMap) {
            await tab(btnAttribute, tabDataMap[btnAttribute]);
        }

        const tabs = document.querySelector("[data-tab]");
        tabs.style.display = "block";
    }

    async function tab(id, getData) {
        const data = await getData();

        let existingElement = document.querySelector("[data-tab]");
        if (existingElement) {
            existingElement.remove();
        }

        let htmlTab = document.createElement("div");
        htmlTab.id = `${id}`;
        htmlTab.setAttribute("data-tab", "");

        const cardContainer = document.createElement("div");
        cardContainer.className = "row text-center my-3";
        htmlTab.append(cardContainer);

        cardContainer.innerHTML = data.map(item => `
                
                <div class="col-12 col-md-3 mt-2" id=${item.id}>
                    <img
                        src=${item.imgUrl}
                        class="card-img-top " alt="guitar"/>
                    <div class="card-body ">
                        <h5 class="card-title" data-guitar-name>${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text" data-guitar-price>Price: ${item.price}$</p>
                        <button type="button" class="btn btn-outline-secondary">Order</button>
                    </div>
                </div>
                       
        `).join("");

        htmlTab.innerHTML += `<div class="border-top my-4"></div>`;
        document.querySelector(".container.mt-4").append(htmlTab);

        addEventToBtn(document.querySelector("[data-tab]"));
    }

    function addEventToBtn(tabSelector) {
        const btns = tabSelector.querySelectorAll("button");
        // tabSelector.querySelectorAll(".col-12").forEach(a => console.log(a));
        // console.log(tabSelector.querySelector("[data-guitar-name]").textContent);

        btns.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                modalForOrderFunction(item.closest(".col-12").querySelector("[data-guitar-name]").textContent,
                    item.closest(".col-12").querySelector("[data-guitar-price]").textContent,
                    tabSelector);
            })
        });
    }

}

export default tabs;