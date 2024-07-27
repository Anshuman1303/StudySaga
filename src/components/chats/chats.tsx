import React, { useState, useEffect } from "react";
import { Stack, Button, Select, Group } from "@mantine/core";
import { io, Socket } from "socket.io-client";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@mantine/hooks";

// Sample data with 20 names
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Judy",
  "Karl",
  "Liam",
  "Mona",
  "Nina",
  "Oscar",
  "Paul",
  "Quinn",
  "Rachel",
  "Steve",
  "Tina",
];

// Sample emoji list
const emojis = ["😀", "😂", "😍", "😎", "🤔", "🥳", "😢", "😡", "😱", "🤯"];

// Initialize socket connection
const socket: Socket = io("http://localhost:3003");

function Demo() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ senderId: string; emoji: string }[]>([]);

  useEffect(() => {
    if (router.query.userId) {
      setUserId(router.query.userId as string);
    }
  }, [router.query]);

  // Handle receiving emoji from the server
  useEffect(() => {
    socket.on("receive_emoji", ({ emoji, senderId }) => {
      setMessages((prevMessages) => [...prevMessages, { emoji, senderId }]);
    });

    return () => {
      socket.off("receive_emoji");
    };
  }, []);

  const handleEmojiClick = (emoji: string, recipient: string) => {
    // Emit the emoji to the selected recipient
    socket.emit("send_emoji", { recipientId: recipient, emoji });
    setShowDropdown(null);
  };

  const handleClickOutside = () => {
    setShowDropdown(null);
  };

  const { ref } = useClickOutside(handleClickOutside);

  if (!userId) {
    return <div>Loading...</div>; // Optionally, show a loading indicator
  }

  return (
    <Stack h={300} bg="var(--mantine-color-body)" align="flex-end" justify="center" gap="md" ref={ref}>
      {names.map((name, index) => (
        <Group key={index} position="center">
          <div
            style={{
              padding: "10px",
              background: "#f0f0f0",
              borderRadius: "4px",
            }}>
            {name}
            {name !== userId && (
              <Button
                onClick={() => setShowDropdown(showDropdown === name ? null : name)}
                style={{
                  marginLeft: "10px",
                }}>
                🎉
              </Button>
            )}
          </div>

          {showDropdown === name && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "50px",
              }}>
              <Select
                data={emojis}
                onChange={(emoji) => handleEmojiClick(emoji as string, name)}
                placeholder="Select an emoji"
                clearable
                style={{
                  width: 120,
                }}
              />
            </div>
          )}
        </Group>
      ))}
      {/* Display received emojis */}
      <Stack spacing="xs" align="center">
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              padding: "5px",
              background: "#d1ffd1",
              borderRadius: "4px",
            }}>
            <strong>{msg.senderId}:</strong> {msg.emoji}
          </div>
        ))}
      </Stack>
    </Stack>
  );
}

export default Demo;
