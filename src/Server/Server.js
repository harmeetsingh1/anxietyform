const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/form_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  selectedOptions: [String],
  totalMarks: Number,
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// API endpoint for form submission
app.post('/api/submitForm', (req, res) => {
  const { selectedOptions, totalMarks } = req.body;

  // Create a new instance of FormData
  const formData = new FormData({
    selectedOptions,
    totalMarks,
  });

  // Save the form data to MongoDB
  formData.save((error) => {
    if (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Failed to save form data' });
    } else {
      res.json({ message: 'Form data saved successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
