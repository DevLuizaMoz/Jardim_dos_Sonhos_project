function showSidebar(event) {
    if (event) {
        event.preventDefault(); // Impede que o link redirecione a página para o topo
    }
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    if (event) {
        if(event.target.tagName.toLowerCase() === 'a') {
            // Não impede o comportamento padrão se o alvo for um link
        } else {
            event.preventDefault(); // Impede que o link redirecione a página para o topo
        }
    }
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Adiciona evento de clique a todos os links dentro do sidebar para fechar o menu
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        hideSidebar(event);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});



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

document.addEventListener('DOMContentLoaded', function() {
    const dateElements = document.querySelectorAll('.date-calendar');
    
    dateElements.forEach(dateElement => {
        dateElement.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
});


function vermais(botao) {
    let comentario = botao.closest(".testimonials-item"); // Obtém o elemento pai correto
    let pontos = comentario.querySelector(".pontos");
    let maisTexto = comentario.querySelector(".mais");
    
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        botao.innerHTML = "Ver mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        botao.innerHTML = "Ver menos";
    }
}
