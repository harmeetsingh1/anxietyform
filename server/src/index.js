const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables from .env file
dotenv.config();

// Models
const { Message } = require("./models/message.model");

// Read environment variables
const PORT = process.env.PORT ?? 4000;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI environment variable not set");
  process.exit(1);
}

// TODO: Setup WebSocket server

async function main() {
  // Connect to MongoDB
  const db = await mongoose.connect(MONGODB_URI);
  console.log(`Connected to database at ${db.connection.host}`);

  // Create new express app
  const app = express();

  // Add cors middleware
  // TODO: Change this based on environment
  app.use(cors("*"));
  // Add middleware that parses JSON from the request body
  app.use(bodyParser.json());

  // Define routes
  app.get("/", (req, res) => {
    res.send("OK");
  });

  // Define messages routes
  app.get("/messages", async (req, res) => {
    // Return the last 4 messages
    const messages = await Message.find().limit(4).sort({ $natural: -1 });
    res.json(messages);
  });

  app.post("/messages", async (req, res) => {
    // TODO: Validate req.body
    const message = new Message(req.body);
    await message.save();
    res.json(message);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

main();
