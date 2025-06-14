import type {
  Context,
  UnknownParams,
} from 'openapi-backend';

declare namespace Components {
    namespace Schemas {
        export interface Article {
            createdAt?: string; // date-time
            createdBy?: string;
            updatedAt?: string; // date-time
            updatedBy?: string;
            id?: string; // uuid
            deleted?: boolean;
        }
        export interface ArticleQueryFilter {
            articleId?: string; // uuid
        }
        export interface PageArticleList {
            pageSize?: number; // int32
            /**
             * First page number: 0
             */
            pageNumber?: number; // int32
            /**
             * Null if no previous page available
             */
            previousPage?: string; // uri
            /**
             * Null if no next page available
             */
            nextPage?: string; // uri
            itemsTotal?: number; // int64
            pagesTotal?: number; // int32
            data?: Article[];
        }
        export interface PageInfo {
            pageSize?: number; // int32
            /**
             * First page number: 0
             */
            pageNumber?: number; // int32
            /**
             * Null if no previous page available
             */
            previousPage?: string; // uri
            /**
             * Null if no next page available
             */
            nextPage?: string; // uri
            itemsTotal?: number; // int64
            pagesTotal?: number; // int32
        }
        export interface PaginationFilter {
            pageSize?: number; // int32
            pageNumber?: number; // int32
        }
    }
}
declare namespace Paths {
    namespace GetAllArticle {
        namespace Parameters {
            export type ArticleQueryFilterDto = Components.Schemas.ArticleQueryFilter;
            export type PaginationFilterDto = Components.Schemas.PaginationFilter;
        }
        export interface QueryParameters {
            articleQueryFilterDto?: Parameters.ArticleQueryFilterDto;
            paginationFilterDto?: Parameters.PaginationFilterDto;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PageArticleList;
            export interface Default {
            }
        }
    }
}


export interface Operations {
  /**
   * GET /api/v1/articles
   */
  ['getAllArticle']: {
    requestBody: any;
    params: UnknownParams;
    query: Paths.GetAllArticle.QueryParameters;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, UnknownParams, Paths.GetAllArticle.QueryParameters, UnknownParams, UnknownParams>;
    response: Paths.GetAllArticle.Responses.$200 | Paths.GetAllArticle.Responses.Default;
  }
}

export type OperationContext<operationId extends keyof Operations> = Operations[operationId]["context"];
export type OperationResponse<operationId extends keyof Operations> = Operations[operationId]["response"];
export type HandlerResponse<ResponseBody, ResponseModel = Record<string, any>> = ResponseModel & { _t?: ResponseBody };
export type OperationHandlerResponse<operationId extends keyof Operations> = HandlerResponse<OperationResponse<operationId>>;
export type OperationHandler<operationId extends keyof Operations, HandlerArgs extends unknown[] = unknown[]> = (...params: [OperationContext<operationId>, ...HandlerArgs]) => Promise<OperationHandlerResponse<operationId>>;


export type Article = Components.Schemas.Article;
export type ArticleQueryFilter = Components.Schemas.ArticleQueryFilter;
export type PageArticleList = Components.Schemas.PageArticleList;
export type PageInfo = Components.Schemas.PageInfo;
export type PaginationFilter = Components.Schemas.PaginationFilter;
