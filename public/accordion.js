try {
    document.getElementsByClassName("accordion-wrapper");
} catch {
} finally {
    addEvent(document.getElementsByClassName("accordion-wrapper"))
}

function addEvent(acc) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
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
}
