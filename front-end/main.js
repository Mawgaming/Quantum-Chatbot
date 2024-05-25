function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    fetch("/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        displayMessage("User: " + userInput);
        displayMessage("Quill: " + data.reply);
        document.getElementById("userInput").value = "";
    });
}

function displayMessage(message) {
    const chatWindow = document.getElementById("chatWindow");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

