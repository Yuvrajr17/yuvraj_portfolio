const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, subject, message }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>New message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });
};


// POST /api/contact
exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const contact = await Contact.create({
      name, email, subject, message,
      ip: req.ip,
    });
    try { await sendEmail({ name, email, subject, message }); } catch (_) {}
    res.status(201).json({ success: true, message: 'Message sent successfully!', id: contact._id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/contact (admin)
exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
