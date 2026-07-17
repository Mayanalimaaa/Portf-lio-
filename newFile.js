window.addEventListener("DOMContentLoaded", () => {

    const titulo = document.getElementById("typingTitle");

    const texto = "Olá, meu nome é ";
    const nome = "Mayana";

    let i = 0;
    let j = 0;

    function escreverTitulo() {

        if (i < texto.length) {

            titulo.textContent = texto.substring(0, i + 1);

            i++;
            setTimeout(escreverTitulo, 70);

        } else {

            escreverNome();

        }
    }

    function escreverNome() {

        if (j < nome.length) {

            titulo.innerHTML =
                texto + "<span>" + nome.substring(0, j + 1) + "</span>";

            j++;
            setTimeout(escreverNome, 120);

        }
    }

    escreverTitulo();

});