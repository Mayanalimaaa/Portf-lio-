/*=========================================
MODO ESCURO / CLARO
=========================================*/

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/*=========================================
EFEITO DE DIGITAÇÃO
=========================================*/

const typing = document.getElementById("typing");

const words = [

    "Desenvolvedora Front-End",
    "Criando Interfaces Modernas",
    "HTML • CSS • JavaScript",
    "Sempre Aprendendo e Evoluindo"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


/*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
LINK ATIVO DO MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
ANIMAÇÃO AO ROLAR A PÁGINA
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

    setTimeout(()=>{

        entry.target.classList.add("show");

    },150);

}

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(`

.section-title,
.about,
.skill-card,
.project-card,
.timeline-item,
.certificate-card,
.stat-card,
.contact-info,
.contact-form
`
);


hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*=========================================
ANIMAÇÃO DAS BARRAS
=========================================*/

const bars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

        }

    });

});

bars.forEach(bar=>{

    skillsObserver.observe(bar);

});


/*=========================================
ANO AUTOMÁTICO NO FOOTER
=========================================*/

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Mayana.Lima - Todos os direitos reservados.`;

}

/*=========================================
PARTÍCULAS
=========================================*/

const particles = document.getElementById("particles");

for(let i = 0; i < 40; i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const size = Math.random()*6+2;

    particle.style.width = size+"px";
    particle.style.height = size+"px";

    particle.style.left = Math.random()*100+"%";

    particle.style.animationDuration =
        (Math.random()*12+8)+"s";

    particle.style.animationDelay =
        Math.random()*10+"s";

    particles.appendChild(particle);

}

/*=========================================
HEADER INTELIGENTE
=========================================*/

let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {

        header.classList.remove("hide");

        return;

    }

    if (currentScroll > lastScroll && currentScroll > 100) {

        // Descendo
        header.classList.add("hide");

    } else {

        // Subindo
        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});


const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


const titulo = document.getElementById("typingTitle");

if (titulo) {

    const texto = "Olá, meu nome é ";
    const nome = "Mayana";

    let i = 0;
    let j = 0;

    function escreverTitulo() {

        if (i < texto.length) {

            titulo.textContent = texto.substring(0, i + 1);
            i++;

            setTimeout(escreverTitulo, 55);

        } else {

            escreverNome();

        }

    }

    function escreverNome() {

        if (j < nome.length) {

            titulo.innerHTML =
                texto +
                "<span>" +
                nome.substring(0, j + 1) +
                "</span>";

            j++;

            setTimeout(escreverNome, 90);

        }

    }

    escreverTitulo();

}


const texto = document.getElementById("typingText");

if (texto) {

    const textoCompleto = 'Sou estudante de <strong>Sistemas para Internet</strong> e apaixonada por desenvolvimento Web. Desenvolvo interfaces modernas, responsivas e intuitivas utilizando HTML, CSS e JavaScript.';

    let j = 0;

    function escreverTexto() {

        if (j <= textoCompleto.length) {

            texto.innerHTML = textoCompleto.substring(0, j);

            j++;

            setTimeout(escreverTexto, 25);

        }

    }

    escreverTexto();

}