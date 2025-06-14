import ArticlesController from '../../api-eafs/generated-server/controllers/ArticlesController.js'
import * as articlesService from "../services/articles-service.js"

export const getArticles = async (req, res) => {
    res.status(200).json({status: "success"})
}

export const getAllArticles = async (req, res) => {
    console.log(req)
    const serviceResult = await articlesService.getAllArticles({})
    res.status(200).json(serviceResult)
}

// monkey-patching the generated code since this is the place where expressServer.js:openapiValidator:operationHandlers is pointing to and there are no way
// to change that (other than monkey-patching the OpenApiValidator.middleware() call itself)
ArticlesController.getAllArticle = getAllArticles