function ColorChanger() {
    var colors = document.querySelectorAll("#color");
    var left = document.querySelector(".left-content");
    var headers = document.querySelectorAll(".right-content h1");
    var borders = document.querySelectorAll(".education-section, .experience-section");
    colors.forEach(function (e) {
        e.addEventListener("click", function () {
            var colorers = e.getAttribute("data-clr");
            left.style.backgroundColor = colorers;
            headers.forEach(function (header) {
                header.style.color = colorers;
            });
            borders.forEach(function (border) {
                border.style.borderColor = colorers;
            });
        });
    });
}
ColorChanger();
