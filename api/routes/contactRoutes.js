const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

const careerController = require("../controllers/careerController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/send", contactController.createContact);
router.post("/career/apply", upload.single("file"), careerController.applyJob);

module.exports = router;