import nodemailer from "nodemailer";

const sendEmail = async function (email, subject, message) {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE_NAME,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Vtube",
      address: process.env.SMTP_FROM_EMAIL,
    },
    to: email, // user email
    subject: subject,
    html: message,
    //text: "Body of the email",
  };

  // Error handling while Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export default sendEmail;
