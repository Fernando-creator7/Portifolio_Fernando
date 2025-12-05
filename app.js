/* MENU MOBILE */
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
});

/* FECHAR MENU APÓS CLIQUE */
document.querySelectorAll(".mobile-nav a").forEach(item => {
    item.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });
});


/* ANIMAÇÃO DE ENTRADA */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // ← Reseta quando sai
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// ===== FILTRO DO PORTFÓLIO (sem "todos") =====
const filtroBtns = document.querySelectorAll(".filtro-btn");
const items = document.querySelectorAll(".galeria .item");

// DEFINIR FILTRO INICIAL (feed, stories, reels ou video)
let filtroInicial = "feed";

// Aplicar filtro inicial ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    aplicarFiltro(filtroInicial);
    document.querySelector(`[data-filter="${filtroInicial}"]`).classList.add("ativo");
});

function aplicarFiltro(filtro) {
    items.forEach(item => {
        item.style.display = item.classList.contains(filtro) ? "block" : "none";
    });
}

// Quando o usuário clica em um botão de filtro
filtroBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        // remover ativo de todos
        filtroBtns.forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");

        // pegar filtro
        const filtro = btn.dataset.filter;

        // aplicar filtro
        aplicarFiltro(filtro);
    });
});



/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");

let currentIndex = 0;

/* Abrir lightbox */
items.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;

        const imgSrc = item.dataset.img;
        const vidSrc = item.dataset.video;

        if (imgSrc) {
            lightboxVideo.style.display = "none";
            lightboxImg.style.display = "block";
            lightboxImg.src = imgSrc;
        }

        if (vidSrc) {
            lightboxImg.style.display = "none";
            lightboxVideo.style.display = "block";
            lightboxVideo.src = vidSrc;
        }

        lightbox.style.display = "flex";
    });
});


/* FECHAR LIGHTBOX */
document.querySelector(".close-btn").addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxVideo.pause();
});

/* NAVEGAÇÃO */
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    items[currentIndex].click();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    items[currentIndex].click();
});

/* BOTÃO VOLTAR AO TOPO */
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
