import express from 'express';

import {getArticles} from "../controller/articles-controller.js"

export const articlesRouter = express.Router();
articlesRouter.route("/api/v1/articles").get(getArticles);