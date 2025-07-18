import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER, // Receiver email
    subject: `New Contact Form Submission from ${name}`,
    text: `
Hello,

You have received a new contact form submission:

----------------------------------------

📌 Name: ${name}

📧 Email: ${email}

📞 Phone: ${phone}

📝 Message:
${message}

----------------------------------------

Regards,
Your Website
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <hr />
      <p><strong>📌 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> ${email}</p>
      <p><strong>📞 Phone:</strong> ${phone}</p>
      <p><strong>📝 Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
      <hr />
      <p>Regards,<br />Your Website</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
