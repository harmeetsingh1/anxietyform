import { useState, useEffect } from "react";
import { api } from "../utils/api.client";

// Bare minimum to get and create messages

/**
 * Get messages from the server
 * @returns {Promise<Array<{value: string}>} messages
 */
async function getMessages() {
  const { data } = await api.get("/messages");
  return data;
}

/**
 * Post a message to the server
 * @param {string} message
 * @returns {Promise<{value: string}>} message
 */
async function createMessage(message) {
  const { data } = await api.post("/messages", { message });
  return data;
}

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    getMessages().then(setMessages);
  }, [key]);

  async function handleSubmit(event) {
    if (!(event.target instanceof HTMLFormElement)) return;
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get("message");

    try {
      await createMessage(message);
      // Force a re-render and re-fetch messages
      setKey((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }

    // Reset the form
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="message" required />
        <button type="submit">create</button>
      </form>
      <br />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}
