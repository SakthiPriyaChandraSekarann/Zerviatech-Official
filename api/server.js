const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Frontend to Backend connect panna
app.use(express.json()); // JSON data-va read panna

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api', contactRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected: ZerviaTech Database"))
  .catch(err => console.log("❌ Connection Error:", err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));