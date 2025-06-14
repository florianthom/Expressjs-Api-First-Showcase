import { Request, Response, NextFunction } from 'express';
import * as articlesService from "../services/articles-service.js"
import {PageArticleList, ArticleQueryFilter, PaginationFilter, operations} from "../../api/generated/types/openapi.js"

type GetAllArticleOp = operations["getAllArticle"];
type GetAllArticleQuery = GetAllArticleOp["parameters"]["query"];
type GetAllArticleResponse = GetAllArticleOp["responses"]["200"]["content"]["application/json"];

export async function getAllArticle(
    req: Request<{}, PageArticleList, {}, GetAllArticleQuery>,
    res: Response<GetAllArticleResponse>,
    next: NextFunction
) {
    return res.json(await articlesService.getAllArticle(
        req.query?.articleQueryFilterDto?.articleId,
        req.query?.paginationFilterDto?.pageSize,
        req.query?.paginationFilterDto?.pageNumber)
    );
}