const nodemailer = require("nodemailer");

async function sendEmail(options) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // false for port 587
            auth: {
                user: process.env.SMTP_USER, // Yeh Render par set kiya hai
                pass: process.env.SMTP_PASS, // Yeh bhi Render par set kiya hai
            },
            connectionTimeout: 10000,
            socketTimeout: 10000
        });

        const mailOptions = {
            from: `"JobNetic Job Portal" <${process.env.EMAIL_USER}>`,
            to: options.email,
            subject: options.subject,
            text: options.message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        return true;
    } catch (error) {
        console.error("Email sending error:", error.message);
        return false;
    }
}

module.exports = sendEmail;