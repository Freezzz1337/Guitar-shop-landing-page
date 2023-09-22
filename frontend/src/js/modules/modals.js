"use strict";

import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

const modalParentForQuest = document.querySelector("#modalForAnswer");
const modalForQuest = new bootstrap.Modal(modalParentForQuest);

export function modalForQuestFunction(message) {
    const modalText = modalParentForQuest.querySelector(".modalForQuest-body p");
    console.log(message)
    // modalText.innerHTML = message;
    modalForQuest.show();
}

const modalParentForOrder = document.querySelector("#modalForOrder");
const modalForOrder = new bootstrap.Modal(modalParentForOrder);

export function modalForOrderFunction(guitarName, guitarPrice, test) {
    const modalForm = modalParentForOrder.querySelector("#dataModalOrderForm");
    const inputGuitarNameForm = modalForm.querySelector("#guitarModel");
    const inputGuitarPriceForm = modalForm.querySelector("#guitarPrice");

    inputGuitarNameForm.value = guitarName;
    inputGuitarPriceForm.value = guitarPrice;

    modalForOrder.show();
}


export default {modalForQuest: modalForQuestFunction, modalForOrder: modalForOrderFunction};