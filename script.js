// Variável para acumular o valor total do carrinho
let totalCart = 0.0;

// Função para adicionar valor ao carrinho em tempo real
function addToCart(price) {
  totalCart += price;
  document.getElementById('total-cart').innerText = totalCart.toFixed(2).replace('.', ',');
}

// Funcionalidade do Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.innerText = '☀️ Light Mode';
  } else {
    themeToggleBtn.innerText = '🌙 Dark Mode';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatBox = document.getElementById('chat-box');
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  // Abrir / Fechar Chat
  toggleBtn.addEventListener('click', () => {
    chatBox.classList.toggle('chat-hidden');
  });

  closeBtn.addEventListener('click', () => {
    chatBox.classList.add('chat-hidden');
  });

  // Função para enviar mensagem
  function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    // Adicionar mensagem do utilizador
    appendMessage(text, 'user-message');
    chatInput.value = '';

    // Resposta automática do robô após 1 segundo
    setTimeout(() => {
      const botResponse = getBotReply(text);
      appendMessage(botResponse, 'bot-message');
    }, 1000);
  }

  // Eventos de clique e tecla Enter
  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function appendMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Lógica simples de resposta do robô
  function getBotReply(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('olá') || msg.includes('oi')) {
      return 'Olá! Bem-vindo à GeekZone! 🚀 Como te posso ajudar?';
    } else if (msg.includes('ajuda') || msg.includes('suporte')) {
      return 'Estou aqui para ajudar! Podes perguntar sobre produtos, jogos ou novidades.';
    } else if (msg.includes('obrigado') || msg.includes('valeu')) {
      return 'De nada! Se precisares de mais alguma coisa, é só chamar! 🤖';
    } else {
      return 'Entendi! O meu sistema ainda está a aprender, mas podes explorar mais conteúdos na GeekZone!';
    }
  }
});