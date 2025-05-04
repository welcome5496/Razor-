const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Basic route
app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

app.listen(5000, () => console.log('Server started on port 5000'));
