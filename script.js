let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const autoScrollSpeed = 3000; // 3 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const offset = -index * 100; // Calculate the offset based on the current index
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-scroll functionality
setInterval(() => {
    changeSlide(1);
}, autoScrollSpeed);

// Initialize the first slide
showSlide(currentSlide);
