import { useState, useEffect, FormEvent } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

// Define the message and poke interfaces
interface Message {
  text: string;
  createdAt: Date;
  sender: string;
  recipient: string;
}

interface Poke {
  sender: string;
  recipient: string;
  message: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formValue, setFormValue] = useState("");
  const [recipient, setRecipient] = useState("");
  const [user, setUser] = useState("user1"); // Current logged-in user

  useEffect(() => {
    // Register the user with the server
    socket.emit("register", user);

    // Fetch messages for the current user
    fetch(`/messages/${user}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));

    // Handle incoming messages
    socket.on("message", (message: Message) => {
      console.log("Message received:", message);
      // Add message to state if relevant to the current user
      if (message.recipient === user || message.sender === user) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    // Handle incoming pokes
    socket.on("poke", (poke: Poke) => {
      console.log("Poke received:", poke);
      // Show an alert if the poke is for the current user
      if (poke.recipient === user) {
        alert(`${poke.sender} has poked you!`);
      }
    });

    return () => {
      socket.off("message");
      socket.off("poke");
    };
  }, [user]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (!recipient) {
      console.error("Recipient is not selected.");
      return;
    }

    const message: Message = {
      text: formValue,
      sender: user,
      recipient,
      createdAt: new Date(),
    };

    console.log("Sending message:", message);
    socket.emit("sendMessage", message);
    setFormValue("");
  };

  const pokeRecipient = () => {
    if (!recipient) {
      console.error("Recipient is not selected.");
      return;
    }

    const poke: Poke = {
      sender: user,
      recipient,
      message: "You have been poked!",
    };

    console.log("Sending poke:", poke);
    socket.emit("poke", poke);
  };

  // Filter messages to only show those where the current user is either the sender or recipient
  const filteredMessages = messages.filter((msg) => msg.recipient === user || msg.sender === user);

  return (
    <div>
      <div>
        <label>Current User: </label>
        <select onChange={(e) => setUser(e.target.value)} value={user}>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
          <option value="user4">User 4</option>
          <option value="user5">User 5</option>
          <option value="user6">User 6</option>
          <option value="user7">User 7</option>
          <option value="user8">User 8</option>
          <option value="user9">User 9</option>
          <option value="user10">User 10</option>
        </select>
      </div>
      <div>
        <label>Recipient: </label>
        <select onChange={(e) => setRecipient(e.target.value)} value={recipient}>
          <option value="">Select Recipient</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
          <option value="user4">User 4</option>
          <option value="user5">User 5</option>
          <option value="user6">User 6</option>
          <option value="user7">User 7</option>
          <option value="user8">User 8</option>
          <option value="user9">User 9</option>
          <option value="user10">User 10</option>
        </select>
      </div>
      <div>
        {filteredMessages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message" />
        <button type="submit">Send</button>
        <button type="button" onClick={pokeRecipient}>
          Poke
        </button>
      </form>
    </div>
  );
};

// Component to display individual chat messages
const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const { text, sender } = message;
  const messageClass = sender === "user1" ? "sent" : "received"; // Adjust class based on sender

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default Chat;
