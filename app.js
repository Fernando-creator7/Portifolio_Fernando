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
