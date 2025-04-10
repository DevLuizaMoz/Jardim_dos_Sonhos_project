const menuBurguer = document.querySelector(".menu-nav");
const nav = document.querySelector(".nav");

menuBurguer.addEventListener("click", () => nav.classList.toggle("active"));

// fazer com que ao clicar nos links a aba se feche automaticamente 

let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true
}





document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide-testimonials');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inicializa o primeiro slide
    showSlide(currentSlide);
    
    // Muda de slide a cada 5 segundos
    setInterval(nextSlide, 5000);
});