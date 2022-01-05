let acc = document.getElementsByClassName("accordion-wrapper");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    let ez = document.getElementsByClassName("accordion")[i];
    ez.classList.toggle("active");
    let accWrap = this.parentElement;
    accWrap.classList.toggle('active');
    let panel = ez.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".pages");
hamburger.addEventListener("click", () => mobileMenu());

function mobileMenu() {
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.getElementsByTagName("header")[0].classList.toggle("active");
}

const navLink = document.querySelectorAll(".pages")[0];

navLink.childNodes.forEach(n => {
    if (n.nodeName !== "#text")
    {
    n.addEventListener("click", closeMenu);
}});

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}