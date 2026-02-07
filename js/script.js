const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = encodeURIComponent(
        `Olá, meu nome é ${nome}${mensagem}`
    );

    const numero = "5554991926903"; // mesmo número aqui

    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");

    form.reset();
});