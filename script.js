const socket = io();

const form = document.getElementById("chat-form");
const messageInput = document.getElementById("message");
const usernameInput = document.getElementById("username");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = {
        user: usernameInput.value,
        text: messageInput.value
    };

    socket.emit("chat message", msg);
    messageInput.value = "";
});

socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    item.textContent = `${msg.user}: ${msg.text}`;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
