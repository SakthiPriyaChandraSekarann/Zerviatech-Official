const Contact = require("../models/Contact");
const transporter = require("../config/mail");

exports.createContactService = async (data) => {
  const { name, email, inquiryType, phone, message } = data;

  // 1. Save to DB
  const newContact = await Contact.create({
    name,
    email,
    inquiryType,
    phone,
    message,
  });

  // 2. Send Email to ADMIN
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "📩 New Contact Form Submission",
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Inquiry Type:</b> ${inquiryType}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });

  // 3. Auto Reply to User
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "✅ We received your message!",
    html: `
      <h3>Hi ${name},</h3>
      <p>Thanks for contacting us. We’ve received your message and will get back to you soon.</p>
      <br/>
      <p>— Team Zervia</p>
    `,
  });

  return newContact;
};