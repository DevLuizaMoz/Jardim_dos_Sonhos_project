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
