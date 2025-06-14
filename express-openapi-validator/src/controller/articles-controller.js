import * as articlesService from "../services/articles-service.js"

export async function getAllArticle(req, res, next) {
 res.json(await articlesService.getAllArticle({}, {}));
}