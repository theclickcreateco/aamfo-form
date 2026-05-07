const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, propertyPrice, targetState, contactNumber, email, country } = req.body;

  // Basic validation
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Full name and email are required' });
  }

  // Create a transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Lead Capture" <${process.env.EMAIL_USER}>`,
    to: 'theclickcreateco@gmail.com',
    subject: `New Lead: ${fullName}`,
    text: `
      New inquiry received:
      
      Full Name: ${fullName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Property Price: $${propertyPrice}
      Target State: ${targetState}
      Country of Residence: ${country}
    `,
    html: `
      <h3>New Inquiry Received</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Property Price:</strong> $${propertyPrice}</p>
      <p><strong>Target State:</strong> ${targetState}</p>
      <p><strong>Country of Residence:</strong> ${country}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
