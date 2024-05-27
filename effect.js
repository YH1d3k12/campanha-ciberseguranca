// Array de letras.
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    let title = document.querySelector("h1");
    let iteration = 0;

    interval = setInterval(() => {
        title.innerText = title.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return title.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= title.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);

    // ----------------- Typing Effect ----------------- //
    let textElements = document.querySelectorAll('.text');
    let textContent = [
        "Se você está lendo isso é porque acessou o QR Code ou entrou no github.",
        "Esta é uma campanha de conscientização sobre cibersegurança.",
        "Ataques cibernéticos têm se tornado uma preocupação global crescente, visando sistemas e redes para obter acesso não autorizado a dados sensíveis, causar danos ou interrupções.",
        "* Evite inserir pendrives, discos ou escanear QR codes de origem desconhecida. Eles podem conter malware projetado para comprometer seus dispositivos e dados.",
        "* Cuidado com redes Wi-Fi 'Evil Twin'. Hackers criam pontos de acesso falsos com nomes semelhantes a redes legítimas para roubar dados sensíveis de usuários desavisados.",
        "* Atenção ao phishing! E-mails e sites falsos imitam entidades confiáveis para enganar usuários e roubar informações pessoais, como senhas e dados bancários. Sempre verifique a autenticidade antes de fornecer informações sensíveis.",
        "* Atualize regularmente seus sistemas operacionais e aplicativos. As atualizações corrigem vulnerabilidades conhecidas e protegem contra ameaças cibernéticas.",
        "- Desenvolvido por Djalma e Eduardo, Turma de ADS."
    ];

    // Chamada inicial para iniciar o efeito de digitação.
    startTyping(0);

    // Função para iniciar o efeito de digitação para o elemento na posição index.
    function startTyping(index) {
        if (index < textElements.length) {
            typingEffect(textElements[index], textContent[index], () => {
                startTyping(index + 1); // Chama recursivamente para o próximo elemento.
            });
        }
    }

    // Função para aplicar o efeito de digitação.
    function typingEffect(element, content, callback) {
        let i = 0;

        function type() {
            if (i < content.length) {
                element.innerHTML += content.charAt(i);
                i++;
                setTimeout(type, 1);
            } else {
                callback(); // Chama o callback para iniciar o próximo elemento.
            }
        }

        type();
    }
});