import header from "./js/modules/header";
import progressBar from "./js/modules/progressBar";
import carousel from "./js/modules/carousel";
import tabs from "./js/modules/tabs";
import timer from "./js/modules/timer";
import forms from "./js/modules/forms";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const deadline = "2023-09-18";

    header();
    carousel();
    tabs();
    timer(deadline);
    forms();
    progressBar();

});