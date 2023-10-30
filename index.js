// Function to handle sending a message
function sendMessage() {

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {

        const chatMessages = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');

        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}