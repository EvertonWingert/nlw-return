import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async send({ subject, body }: SendMailData): Promise<void> {
    transport.sendMail({
      from: "Equipe feedget",
      to: "Everton <everton.w@hotmail.com>",
      subject: subject,
      html: body,
    });
  }
}
