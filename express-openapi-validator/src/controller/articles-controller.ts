import { Request, Response, NextFunction } from 'express';
import * as articlesService from "../services/articles-service.js"
import {PageArticleList, ArticleQueryFilter, PaginationFilter, operations} from "../../api/generated/types/openapi.js"

// type GetAllArticleResponse = operations["getAllArticle"]["responses"]["200"]["content"]["application/json"];



type GetAllArticleOp = operations["getAllArticle"];
type GetAllArticleQuery = GetAllArticleOp["parameters"]["query"];
type GetAllArticleResponse = GetAllArticleOp["responses"]["200"]["content"]["application/json"];

export async function getAllArticle(
    req: Request<{}, PageArticleList, {}, GetAllArticleQuery>,
    res: Response<GetAllArticleResponse>,
    next: NextFunction
) {
    const tmp = req.query;
    console.log(JSON.stringify(tmp))
    return res.json(await articlesService.getAllArticle({}, {}));
}