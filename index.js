const robo = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
robo.lang = 'pt-BR';

function ouvir() {
    document.getElementById("resposta").innerText = "Ouvindo...";
    robo.start();
}

robo.onresult = function(evento) {
    
    const fala = evento.results[0][0].transcript.toLowerCase();

  
    const tela = document.getElementById("resposta");

    if (fala.includes("claro") || fala.includes("luz") || fala.includes("branco")) {
        document.body.classList.add("modo-claro");
        document.body.classList.remove("modo-escuro");
        tela.innerText = "Modo claro ativado!";
    } else if (fala.includes("frete") || fala.includes("entrega")) {
        tela.innerText = "Frete Grátis para compras acima de R$ 200,00";
    } else if (fala.includes("desconto")) {
        tela.innerText = "Use o CUPOM GEEKZONE10 para 10% de Desconto";
    } else {
       
        tela.innerText = `Comando "${fala}" não reconhecido.`;
    }
};