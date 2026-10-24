async function sendEmail(options) {
    try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": process.env.SMTP_PASS, // Aapka Brevo SMTP/API Key
                "content-type": "application/json"
            },
            body: JSON.stringify({
                sender: {
                    name: "JobNetic Job Portal",
                    email: process.env.EMAIL_USER
                },
                to: [
                    {
                        email: options.email
                    }
                ],
                subject: options.subject,
                textContent: options.message
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to send email via Brevo API");
        }

        console.log("Email sent successfully via API:", data);
        return true;
    } catch (error) {
        console.error("Email sending error:", error.message);
        return false;
    }
}

module.exports = sendEmail;