document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    const title = document.querySelector(".glowing-text");

    function glowEffect(element) {
        element.style.textShadow = "0 0 30px #ff4d4d, 0 0 40px #ff0000, 0 0 50px #ff4d4d";
        setTimeout(() => {
            element.style.textShadow = "0 0 20px #ff0000, 0 0 30px #ff4d4d, 0 0 40px #ff0000";
        }, 500);
    }

    logo.addEventListener("mouseenter", () => glowEffect(logo));
    title.addEventListener("mouseenter", () => glowEffect(title));
});