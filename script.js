function scrollToElement(elementSelector, instance){
    instance=0;
    //select all elements that match the selector
    const elements= document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behavior: "smooth" });
    }
}

const link1=document.getElementById("link1");
const link2=document.getElementById("link2");
const link3=document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.Features');
});

link2.addEventListener('click', () => {
    scrollToElement('.pricing');
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const slides = document.querySelectorAll(".project-slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-dots");

let currentSlide = 0;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.classList.add("slider-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `Go to project ${index + 1}`);

    dot.addEventListener("click", () => {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dot");

function showSlide(index) {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

// Auto slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);