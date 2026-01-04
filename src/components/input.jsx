import { useState } from "react"
import "./input.css"

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function SaveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages= [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);


    const response= window.Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);


    setInputText(""); // clear input
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // stops form submit/newline behavior
      sendMessage();
    }
  }

  return (
    <div className="input-container">
      <input
      className="input"
        placeholder="Send a message"
        size="30"
        value={inputText}
        onKeyDown={handleKeyDown}
        onChange={SaveInputText}
      />
      <button className="send-button" onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
