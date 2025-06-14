import { Request, Response } from 'express';
import { Context } from 'openapi-backend';
import * as articlesService from "../services/articles-service.js"
import type { OperationHandler, OperationResponse ,Operations} from "../../api/generated/types/openapi.js";

export const getAllArticle: OperationHandler<"getAllArticle"> = async (
  c,
  req,
  res
) => {
    
    console.log("in handler")
    console.log(c)
    
    // types are hinting to this
    // console.log(c.request.query?.paginationFilterDto?.pageSize)
    // but actually the parameters are accessible here
    // so there is a mismtatch
    console.log(c.request.query?.pageSize)

    const serviceResult = await articlesService.getAllArticle(
        c.request.query?.articleQueryFilterDto?.articleId,
        c.request.query?.paginationFilterDto?.pageSize,
        c.request.query?.paginationFilterDto?.pageNumber);


    const response: OperationResponse<"getAllArticle"> = {
        ...serviceResult,
    };

    // return c.response.status(200).json(response);
    return res.status(200).json(response)
}