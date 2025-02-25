
// Scroll Animation - Images pop up when in view
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Image Carousel
let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

// Initialize first image display
showImage(currentIndex);
