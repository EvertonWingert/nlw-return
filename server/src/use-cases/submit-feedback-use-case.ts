import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute({ type, comment, screenshot }: SubmitFeedbackUseCaseRequest) {
    if (!type) {
      throw new Error("Type is required");
    }
    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Screenshot must be a base64 encoded image");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    this.mailAdapter.send({
      subject: "Novo feedback",
      body: [
        `<div>`,
        `<p>Novo feedback de ${type}</p>`,
        `<p>${comment}</p>`,
        `<div>`,
      ].join("\n"),
    });
  }
}
