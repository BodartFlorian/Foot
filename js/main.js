let reset = document.querySelector("#reset");

reset.onclick = function swap(cssFile) {
        let link = document.getElementById("change-style");
        link.href = ('../css/style.css');
}

let position1 = document.querySelector("#position1");

position1.onclick = function swap(cssFile) {
    if (window.matchMedia("(max-width: 767px)").matches){
        let link = document.getElementById("change-style");
        link.href = ('../css/littlePosition1.css');
    }
    else {
        let link = document.getElementById("change-style");
        link.href = ('../css/position1.css');
    }
}