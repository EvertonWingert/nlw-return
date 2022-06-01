import { SubmitFeedbackUseCase } from "../src/use-cases/submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { send: sendMailSpy }
);

describe("Submit feedback", () => {
  test("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "I have a bug",
        screenshot: "data:image/png;base64sadasdasd",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  test("should not be able to submit a feedback whithout type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "I have a bug",
        screenshot: "data:image/png;base64sadasdasd",
      })
    ).rejects.toThrow();
  });

  test("should not be able to submit a feedback whithout comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64sadasdasd",
      })
    ).rejects.toThrow();
  });

  test("should not be able to submit a feedback with invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "I have a bug",
        screenshot: "ASDASD",
      })
    ).rejects.toThrow();
  });
});
