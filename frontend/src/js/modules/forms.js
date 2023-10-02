"use strict";

import {postAskQuestion, postOrder} from "./serverRequests";

function forms() {
    function formAskQuestion() {
        const askQuestionForm = document.querySelector("#askQuestForm");
        askQuestionForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (e.target) {
                const formData = new FormData(askQuestionForm);

                postAskQuestion(formData);
                clearForm(askQuestionForm);
            }
        });

        function clearForm(formSelector) {
            formSelector.querySelector("#name").value = "";
            formSelector.querySelector("#email").value = "";
        }
    }

    function formOrder() {
        const orderForm = document.querySelector("#dataModalOrderForm");

        orderForm.addEventListener("submit", e => {
            if (e.target) {
                const formData = new FormData(orderForm);
                postOrder(formData);
            }
        });
    }

    formAskQuestion();
    formOrder();

}

export default forms;