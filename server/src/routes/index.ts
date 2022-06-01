import express from "express";
import FeedbackController from "../controllers/feedback-controller";

const routes = express.Router();

routes.post("/feedbacks", new FeedbackController().create);

export { routes };
