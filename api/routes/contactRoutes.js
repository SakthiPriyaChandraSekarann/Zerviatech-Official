const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/send", contactController.createContact);

module.exports = router;