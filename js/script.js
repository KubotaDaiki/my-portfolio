$(function () {
    $.scrollify({
        section: ".box",
        scrollSpeed: 600,
        afterResize: function () {
            if ($(window).width() <= 768) {
                $.scrollify.disable()
            } else {
                $.scrollify.enable()
            }
        },
        afterRender: function () {
            if ($(window).width() <= 768) {
                $.scrollify.disable()
            } else {
                $.scrollify.enable()
            }
        },
    });

});

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
    loading.classList.add("hide");
}, false);