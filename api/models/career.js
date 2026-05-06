const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// --- NEW MODEL START ---
const Career = sequelize.define(
  "Career",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: { isEmail: true }
    },
    phone: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING },
    experience: { type: DataTypes.STRING },
    qualification: { type: DataTypes.STRING },
    job: { type: DataTypes.STRING },
    resumePath: { type: DataTypes.STRING }, // PDF file save panna path
  },
  { timestamps: true }
);

module.exports = Career;
// --- NEW MODEL END ---