// This project uses the nodemailer library to send email
// However, it is recommended to switch over to dedicated email services
// like Mailgun, AWS SES, etc.
import nodemailer from 'nodemailer';

const nodemailerConfig = process.env.NODEMAILER_CONFIG
  ? JSON.parse(process.env.NODEMAILER_CONFIG)
  : {};

const smtpConfig = {
  host: 'us2.smtp.mailhostbox.com',
  port: 587,
  secure: true, // use SSL
  auth: {
    user: nodemailerConfig.user,
    pass: nodemailerConfig.pass,
  },
};
const transporter = nodemailer.createTransport(smtpConfig);
export async function sendMail({ from, to, subject, html }) {
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (e) {
    console.error(e);
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  // TODO: Replace with the email you want to use to send email
  from: nodemailerConfig?.auth?.user,
};
