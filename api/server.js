const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Start Server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB Connected");

    await sequelize.sync();
    console.log("✅ Tables Created");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

startServer();