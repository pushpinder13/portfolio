const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
require('dotenv').config();

// server used to send emails
const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

// CORS configuration - restrict to specific origins in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourportfolio.com', 'https://www.yourportfolio.com'] 
    : ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use("/contact", limiter);
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// Email configuration using environment variables
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Email service ready");
  }
});

// Input validation and sanitization
const validateInput = (req, res, next) => {
  const { firstName, lastName, email, message, phone } = req.body;
  
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  
  // Sanitize inputs (basic HTML escaping)
  req.body.firstName = firstName.replace(/[<>]/g, '');
  req.body.lastName = lastName.replace(/[<>]/g, '');
  req.body.message = message.replace(/[<>]/g, '');
  req.body.phone = phone ? phone.replace(/[<>]/g, '') : '';
  
  next();
};

router.post("/contact", validateInput, (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email send error:", error);
      res.status(500).json({ error: "Failed to send message" });
    } else {
      res.json({ code: 200, status: "Message sent successfully" });
    }
  });
});

module.exports = app;