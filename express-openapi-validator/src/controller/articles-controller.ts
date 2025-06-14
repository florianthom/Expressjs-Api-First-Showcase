import { Request, Response, NextFunction } from 'express';
import * as articlesService from "../services/articles-service.js"
import {PageArticleList, ArticleQueryFilter, PaginationFilter, operations} from "../../api/generated/types/openapi.js"

// type GetAllArticleOp = operations["getAllArticle"];
// type GetAllArticleQuery = GetAllArticleOp["parameters"]["query"];
// type GetAllArticleResponse = GetAllArticleOp["responses"]["200"]["content"]["application/json"];

type JsonResponse<T> = T extends { content: { "application/json": infer R } } ? R : never;
type JsonResponseUnion<T> = { [K in keyof T]: JsonResponse<T[K]>}[keyof T];

export type OperationHandler<operationId extends keyof operations> = (
    req:  Request<{}, JsonResponseUnion<operations[operationId]["responses"]>, {}, operations[operationId]["parameters"]["query"]>,
    res: Response<JsonResponseUnion<operations[operationId]["responses"]>>,
    next: NextFunction
) => Promise<Response<JsonResponseUnion<operations[operationId]["responses"]>>>;

export const getAllArticle: OperationHandler<"getAllArticle"> = async (req, res, next) => {
    return res.json(await articlesService.getAllArticle(
        req.query?.articleQueryFilterDto?.articleId,
        req.query?.paginationFilterDto?.pageSize,
        req.query?.paginationFilterDto?.pageNumber)
    );
}