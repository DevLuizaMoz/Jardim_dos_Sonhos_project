const menuBurguer = document.querySelector(".menu-nav");
const nav = document.querySelector(".nav");

menuBurguer.addEventListener("click", () => nav.classList.toggle("active"));

// fazer com que ao clicar nos links a aba se feche automaticamente 