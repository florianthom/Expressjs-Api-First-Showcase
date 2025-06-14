import { Request, Response, NextFunction } from 'express';
import * as articlesService from "../services/articles-service.js"
import {PageArticleList, ArticleQueryFilter, PaginationFilter, operations} from "../../api/generated/types/openapi.js"

type GetAllArticleOp = operations["getAllArticle"];
type GetAllArticleQuery = GetAllArticleOp["parameters"]["query"];
type GetAllArticleResponse = GetAllArticleOp["responses"]["200"]["content"]["application/json"];


type OperationWithResponses = {
  responses: Record<any, any>
};

type SuccessStatusCode<T extends OperationWithResponses> = Extract<
  keyof T["responses"],
  "200" | "201" | "202" | "203" | "204"
>;

type JsonResponseContent<T extends OperationWithResponses> =
  T["responses"][SuccessStatusCode<T>]["content"]["application/json"];


export type OperationHandler<operationId extends keyof operations> = (
    req:  Request<{}, operations[operationId]["responses"][200]["content"]["application/json"], {}, operations["getAllArticle"]["parameters"]["query"]>,
    res: Response<operations[operationId]["responses"][200]["content"]["application/json"]>,
    next: NextFunction
) => Promise<Response<operations["getAllArticle"]["responses"]["200"]["content"]["application/json"]>>;

export const getAllArticle: OperationHandler<"getAllArticle"> = async (req, res, next) => {
    return res.json(await articlesService.getAllArticle(
        req.query?.articleQueryFilterDto?.articleId,
        req.query?.paginationFilterDto?.pageSize,
        req.query?.paginationFilterDto?.pageNumber)
    );
}


 Promise<Response<GetAllArticleResponse>> 


