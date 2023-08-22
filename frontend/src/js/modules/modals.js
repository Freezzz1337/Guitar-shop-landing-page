import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export function modalForQuest(message) {
    const modalParent = document.querySelector("#modalForAnswer");
    const modal = new bootstrap.Modal(modalParent);
    const modalText = modalParent.querySelector(".modal-body p");

    modalText.innerHTML = message;
    modal.show();
}

export function modalForOrder(btnAttribute) {
    const modalParent = document.querySelector("#modalForOrder");
    const modal = new bootstrap.Modal(modalParent);
    const modalForm =  modalParent.querySelector("#dataModelOrderForm");

    console.log(modalForm);

    modal.show();
}

export default {modalForQuest, modalForOrder};