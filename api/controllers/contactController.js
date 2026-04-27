const contactService = require("../services/contactService");

exports.createContact = async (req, res) => {
  try {
    const { name, email, inquiryType, message } = req.body;

    if (!name || !email || !inquiryType || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const result = await contactService.createContactService(req.body);

    return res.status(201).json({
      success: true,
      message: "Message sent & email delivered",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};