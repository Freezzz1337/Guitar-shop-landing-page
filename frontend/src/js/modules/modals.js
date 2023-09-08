import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

const modalParentForQuest = document.querySelector("#modalForAnswer");
const modalForQuest = new bootstrap.Modal(modalParentForQuest);
export function modalForQuestFunction(message) {

    const modalText = modalParentForQuest.querySelector(".modalForQuest-body p");

    modalText.innerHTML = message;
    modalForQuest.show();
}

const modalParentForOrder = document.querySelector("#modalForOrder");
const modalForOrder = new bootstrap.Modal(modalParentForOrder);

export function modalForOrderFunction(btnAttribute) {

    const modalForm = modalParentForOrder.querySelector("#dataModelOrderForm");

    modalForOrder.show();

}


export default {modalForQuest: modalForQuestFunction, modalForOrder: modalForOrderFunction};