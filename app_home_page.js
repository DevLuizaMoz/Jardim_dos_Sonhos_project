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


let commentCount = 1; // Contador para o slider de comentários
document.getElementById("radio-testimonials1").checked = true;

setInterval(function() {
    nextComment();
}, 3000);

function nextComment() {
    commentCount++;
    if (commentCount > 5) {
        commentCount = 1;
    }
    document.getElementById("radio-testimonials" + commentCount).checked = true;
}