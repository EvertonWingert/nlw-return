export interface SendMailData {
  body: string;
  subject: string;
}

export interface MailAdapter {
  send(data: SendMailData): Promise<void>;
}
