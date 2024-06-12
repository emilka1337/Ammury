const STATES = {        // This object contains states from the whole site
    currentScroll: 0
}

//#region Navbar toggling on mobile
document.querySelector('.navbar-toggler').addEventListener("click", function() {
    this.classList.toggle("open")
    document.querySelector('.navbar>ul').classList.toggle("show");
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector('.navbar>ul').classList.remove("show");
    });
});
//#endregion

//#region shows/hides languages on focus/blur button
document.querySelector('.show-languages-button').addEventListener("focus", () => {
    document.querySelector('.languages-list').classList.add("show");
});

document.querySelector('.show-languages-button').addEventListener("blur", () => {
    setTimeout(function () {
        document.querySelector('.languages-list').classList.remove("show");
    }, 200);
});
//#endregion

//#region  Events that happens on page scroll
window.addEventListener("scroll", () => {
    // Hides language panel on scroll
    if (document.querySelector('.languages-list').classList.contains("show")) {
        document.querySelector('.show-languages-button').blur();
        document.querySelector('.languages-list').classList.remove("show");
    }

    STATES.currentScroll = window.scrollY;
}, { passive: true });
//#endregion

//#region // Setting up the carousel
document.querySelectorAll('.project-carousel').forEach(elem => {
    new Flickity(elem, {
        "cellAlign": "left",
        "contain": true,
        "wrapAround": true,
        "autoPlay": 3000,
        "selectedAttraction": 0.005,
        "friction": 0.15,
        "imagesLoaded": true,
        "arrowShape": {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
        }
    })
});
//#endregion

document.querySelector('#scrollToTop').addEventListener("click", () => window.scroll({ top: 0, behavior: "smooth" }));