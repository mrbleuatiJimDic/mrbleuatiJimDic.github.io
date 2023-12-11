const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messagesDiv = document.getElementById("messages");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    messagesDiv.innerHTML += `<div class="user-message">${message}</div>`;
    messageInput.value = "";

    // Envoi du message à l'interface de l'assistance (dans la console ici)
    console.log(`Utilisateur : ${message}`);
  }
}