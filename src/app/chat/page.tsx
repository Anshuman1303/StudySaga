// pages/index.tsx
"use client";
import { useState } from "react";
import Chat from "@/components/chats/chats";

const Home: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary state for demo purposes

    return (
        <div>
            {isLoggedIn ? (
                <Chat />
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            )}
        </div>
    );
};

export default Home;
