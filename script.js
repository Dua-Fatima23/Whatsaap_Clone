let currentChat = "";
function openChat(name) {
    currentChat = name;
    document.getElementById("chatHeader").innerHTML = `
        <span>${name}</span>
        <div class="chat-header-icons">
            <i class="fa fa-phone"></i>
            <i class="fa fa-video"></i>
            <i class="fa fa-ellipsis-v"></i>
        </div>
    `;
    document.getElementById("chatMessages").innerHTML = "";
}
function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value.trim();
    if (message) {
        let chatBox = document.getElementById("chatMessages");
        let newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = message;
        chatBox.appendChild(newMessage);
        setTimeout(() => {
            let reply = document.createElement("div");
            reply.classList.add("message", "received");
            reply.innerText = "Auto-reply from " + currentChat;
            chatBox.appendChild(reply);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
function addContact() {
    let name = prompt("Enter contact name:");
    if (name) {
        let chatList = document.getElementById("chatList");
        let newContact = document.createElement("div");
        newContact.classList.add("chat");
        newContact.setAttribute("onclick", `openChat('${name}')`);
        newContact.innerHTML = `<img src='https://via.placeholder.com/40' alt='User'><div><h3>${name}</h3><p>New Contact</p></div>`;
        chatList.appendChild(newContact);
    }
}