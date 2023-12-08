const carousels = document.querySelectorAll(".carousel");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    e.currentTarget.classList.add("dragging"); // Usar e.currentTarget para acessar o elemento atual
    startX = e.pageX;
    startScrollLeft = e.currentTarget.scrollLeft; // Usar e.currentTarget para acessar o elemento atual
}

const dragging = (e) => {
    if (!isDragging) return;
    e.currentTarget.scrollLeft = startScrollLeft - (e.pageX - startX); // Usar e.currentTarget para acessar o elemento atual
}

const dragStop = () => {
    isDragging = false;
    carousels.forEach(carousel => {
        carousel.classList.remove("dragging"); // Remover a classe "dragging" de todos os carrosseis
    });
}

carousels.forEach(carousel => {
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
});

// Button talk 

document.getElementById("btn-talk").addEventListener("click", function() {
    window.location.href = "index.html#contact";
});

// Hide Header on Scroll Down Show on Scroll Up

let lastScroll = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function (){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScroll){
        navbar.style.opacity = "0";
    } else {
        navbar.style.opacity = "1";
    }
    lastScroll = scrollTop;
});



