const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Save the contact message to MongoDB
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error saving contact info", error });
  }

  // Configure NodeMailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can change the service or use a custom SMTP server
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to the receiver (site owner)
  const mailOptionsReceiver = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Inquiry from ${name}`,
    text: `Hello Admin,

You have received a new contact inquiry from your Portfolio website.

Details:
- Name: ${name}
- Email: ${email}
- Message: ${message}

Please review the inquiry and respond as needed.

Best regards,`,
  };

  // Confirmation email to the sender
  const mailOptionsSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "We Received Your Message",
    text: `Hi ${name},\n\nThank you for contacting us. We received your message:\n"${message}"\n\nWe will get back to you shortly.\n\nBest Regards,\nAnsh Modi`,
  };

  try {
    await transporter.sendMail(mailOptionsReceiver);
    await transporter.sendMail(mailOptionsSender);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

module.exports = router;
