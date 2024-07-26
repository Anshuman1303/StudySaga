"use client";

import { useEffect, useState } from "react";
import socket from "@/services/socket";

const Chat = () => {
        const [username, setUsername] = useState<string>("");
        const [recipient, setRecipient] = useState<string>("");
        const [emoji, setEmoji] = useState<string>("");
        const [users, setUsers] = useState<string[]>([]);
        const [receivedEmojis, setReceivedEmojis] = useState<
                { emoji: string; sender: string }[]
        >([]);

        useEffect(() => {
                socket.on("updateUserList", (userList: string[]) => {
                        setUsers(userList);
                });

                socket.on(
                        "receiveEmoji",
                        (data: { emoji: string; sender: string }) => {
                                setReceivedEmojis((prev) => [...prev, data]);
                        }
                );

                return () => {
                        socket.off("updateUserList");
                        socket.off("receiveEmoji");
                };
        }, []);

        const register = () => {
                socket.emit("register", username);
        };

        const sendEmoji = () => {
                socket.emit("sendEmoji", { emoji, recipient });
        };

        return (
                <div>
                        <div>
                                <input
                                        value={username}
                                        onChange={(e) =>
                                                setUsername(e.target.value)
                                        }
                                        placeholder="Enter your username"
                                />
                                <button onClick={register}>Register</button>
                        </div>
                        <div>
                                <select
                                        value={recipient}
                                        onChange={(e) =>
                                                setRecipient(e.target.value)
                                        }>
                                        <option value="">
                                                Select recipient
                                        </option>
                                        {users.map((user) => (
                                                <option key={user} value={user}>
                                                        {user}
                                                </option>
                                        ))}
                                </select>
                                <input
                                        value={emoji}
                                        onChange={(e) =>
                                                setEmoji(e.target.value)
                                        }
                                        placeholder="Enter emoji"
                                />
                                <button onClick={sendEmoji}>Send Emoji</button>
                        </div>
                        <div>
                                <h3>Received Emojis:</h3>
                                <ul>
                                        {receivedEmojis.map((emoji, index) => (
                                                <li key={index}>
                                                        {emoji.sender}:{" "}
                                                        {emoji.emoji}
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </div>
        );
};

export default Chat;
