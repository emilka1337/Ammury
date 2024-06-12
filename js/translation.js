const TRANSLATABLE_TEXT = document.querySelectorAll('.translatable-text');

document.querySelectorAll('.language-button').forEach(item => {
    item.addEventListener("click", function() {
        let selectedLang = this.dataset["lang"];
        localStorage.setItem("language", selectedLang);
        changeLanguage(selectedLang);
    });
});

function changeLanguage(selectedLang) {
    for (let index in TRANSLATABLE_TEXT) {
        let element = TRANSLATABLE_TEXT[index]
        element.innerText = DICTIONARY[selectedLang][index];
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

changeLanguage(localStorage.getItem("language") || DICTIONARY[navigator.language.substring(0, 2)] || "en");