const STATES = {        // This object contains states from the whole site
    currentScroll: 0
}

//#region Navbar toggling on mobile
document.querySelector('.navbar-toggler').addEventListener("click", function () {
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

//#region Carousel control
let flkty = new Flickity('.mobile-carousel', {
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: true
});
//#endregion

//#region EmailJS
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "PTE175P7kpE9Z-tmI",
    });
})();

document.querySelector('.contact-form').addEventListener("submit", (e) => {
    e.preventDefault()
    
    let params = {
        from_name: document.querySelector('#formName').value,
        phone_number: document.querySelector('#operator_number').value + document.querySelector('#phone_number').value,
        message: document.querySelector('#form-message').value
    }

    emailjs.send("service_pqg8ixq", "template_7dvelmi", params).then((response) => {
        alert("Email sent successfully!")
    });
});
//#endregion

document.querySelector('#scrollToTop').addEventListener("click", () => window.scroll({ top: 0, behavior: "smooth" }));