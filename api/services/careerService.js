const Career = require("../models/Career");
const transporter = require("../config/mail");

// --- NEW SERVICE START ---
exports.createCareerService = async (data, file) => {
  const { name, email, phone, location, experience, qualification, job } = data;

  // 1. Save to DB
  const newApplication = await Career.create({
    name,
    email,
    phone,
    location,
    experience,
    qualification,
    job,
    resumePath: file ? file.path : null,
  });

  // 2. Send Email to ADMIN with Resume
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `💼 New Career Application: ${job} - ${name}`,
    html: `
      <h2>New Job Application Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Role Applied:</b> ${job}</p>
      <p><b>Experience:</b> ${experience}</p>
      <p><b>Qualification:</b> ${qualification}</p>
      <p><b>Location:</b> ${location}</p>
    `,
    attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
  });

  // 3. Auto-Reply to Candidate
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Application Received - Zervia Tech Solutions",
    html: `<h3>Hi ${name},</h3>
           <p>Thank you for applying for the <b>${job}</b> position. Our HR team will review your profile and get back to you soon.</p>
           <p>Best Regards,<br/>HR Team - Zervia</p>`,
  });

  return newApplication;
};
// --- NEW SERVICE END ---