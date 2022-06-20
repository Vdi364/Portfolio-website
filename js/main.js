//header scroll

let nav = document.querySelector(".navbar");
Window.onscroll = function() {
    if (document.document.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}