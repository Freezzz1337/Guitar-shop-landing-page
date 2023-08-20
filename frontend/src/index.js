import header from "./js/modules/header";
import progressBar from "./js/modules/progressBar";
import carousel from "./js/modules/carousel";
import tabs from "./js/modules/tabs";
import timer from "./js/modules/timer";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const deadline = "2023-09-18";

    header();
    progressBar();
    carousel();
    tabs();
    timer(deadline);
});