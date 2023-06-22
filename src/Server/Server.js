// const mongoose = require('mongoose');
// const uri = "mongodb+srv://harmeeths1998:harmeeths1998@cluster0.7qtb3ih.mongodb.net/?retryWrites=true&w=majority";

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const questionSchema = new mongoose.Schema({
//   questionId: { type: Number, required: true },
//   questionTitle: { type: String, required: true },
//   options: [{ type: String, required: true }],
//   weightage: [{ type: Number, required: true }],
// });

// const Question = mongoose.model('Question', questionSchema);

// module.exports = { Question };








// const express = require("express");
// const { MongoClient } = require("mongodb");
// const WebSocket = require('ws');

// const app = express();
// const port = 5000;
// const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
// const client = new MongoClient(uri);

// // Connect to MongoDB
// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// connectToMongoDB();

// // WebSocket setup
// const wss = new WebSocket.Server({ server});

// wss.on('connection', (ws) => {
//   console.log('A new WebSocket connection was established.');

//   ws.on('message', (message) => {
//     console.log('Received message:', message);
//     // Handle the received message from the client
//   });

//   ws.on('close', () => {
//     console.log('WebSocket connection was closed.');
//     // Clean up any necessary resources or handle disconnection
//   });
// });


// // Define API routes
// app.get("/api/question", async (req, res) => {
//   try {
//     const collection = client.db("question").collection("collection"); // Replace with your database and collection names
//     const questions = await collection.find().toArray();
//     res.json(questions);
//   } catch (error) {
//     console.error("Error fetching questions:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });











// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/form_data', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a schema for the form data
// const formDataSchema = new mongoose.Schema({
//   selectedOptions: [String],
//   totalMarks: Number,
// });

// // Create a model based on the schema
// const FormData = mongoose.model('FormData', formDataSchema);

// // API endpoint for form submission
// app.post('/api/submitForm', (req, res) => {
//   const { selectedOptions, totalMarks } = req.body;

//   // Create a new instance of FormData
//   const formData = new FormData({
//     selectedOptions,
//     totalMarks,
//   });

//   // Save the form data to MongoDB
//   formData.save((error) => {
//     if (error) {
//       console.error('Error saving form data:', error);
//       res.status(500).json({ error: 'Failed to save form data' });
//     } else {
//       res.json({ message: 'Form data saved successfully' });
//     }
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
