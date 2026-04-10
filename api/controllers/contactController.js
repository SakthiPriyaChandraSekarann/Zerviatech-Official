// const Contact = require('../models/Contact');
// const nodemailer = require('nodemailer');

// exports.submitForm = async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     // 1. Database-la save pandrom (Back-up irukattum)
//     const newContact = new Contact({ name, email, phone, message });
//     await newContact.save();

//     // 2. Mail anuppura setup
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     // 3. Mail-oda design
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL, // Inga unga mail-kae notification varum
//       subject: `🔥 New Customer Enquiry: ${name}`,
//       html: `
//         <div style="background:#f4f4f4; padding:20px; border-radius:10px;">
//           <h2 style="color:#1e2a5a;">New Lead from ZerviaTech Website</h2>
//           <p><strong>Customer Name:</strong> ${name}</p>
//           <p><strong>Email ID:</strong> ${email}</p>
//           <p><strong>Mobile:</strong> ${phone || 'No phone provided'}</p>
//           <p><strong>Message:</strong></p>
//           <div style="background:#fff; padding:10px; border:1px solid #ddd;">
//             ${message}
//           </div>
//         </div>
//       `
//     };

//     // 4. Mail-a Send pannu
//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ success: true, message: "Enquiry received! We will check the mail." });

//   } catch (error) {
//     console.error("Mail Error:", error);
//     res.status(500).json({ success: false, error: "Database saved, but mail failed. Check App Password." });
//   }
// };


const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 1. Save to DB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // 2. Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 3. Mail content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `🔥 New Customer Enquiry: ${name}`,
      html: `
        <div style="background:#f4f4f4; padding:20px; border-radius:10px;">
          <h2 style="color:#1e2a5a;">New Lead from ZerviaTech Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'No phone provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#fff; padding:10px; border:1px solid #ddd;">
            ${message}
          </div>
        </div>
      `
    };

    // 4. Send mail safely
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Mail sent:", info.response);
    } catch (mailError) {
      console.log("⚠️ Mail failed but continuing:", mailError.message);
    }

    // 5. Always send success response
    return res.status(201).json({
      success: true,
      message: "Enquiry saved successfully!"
    });

  } catch (error) {
    console.error("❌ Server Error:", error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
};