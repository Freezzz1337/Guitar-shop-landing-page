import {modalForQuestFunction} from "./modals";

function forms() {
    function formAskQuestion() {

        const askQuestionForm = document.querySelector("#askQuestForm");
        askQuestionForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(askQuestionForm);
            if (Object.fromEntries(formData)) {
                modalForQuestFunction("Test text");
            }
        });

    }

    function formOrder() {

    }

    formAskQuestion();
}

export default forms;