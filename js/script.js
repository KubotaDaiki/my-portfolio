$(function () {
    $.scrollify({
        section: ".box",
        scrollSpeed: 600,
    });
});

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
    loading.classList.add("hide");
}, false);