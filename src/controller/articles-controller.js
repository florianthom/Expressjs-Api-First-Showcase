import ArticlesController from '../../api-eafs/generated-server/controllers/ArticlesController.js'
import * as articlesService from "../services/articles-service.js"

export const getArticles = async (req, res) => {
    res.status(200).json({status: "success"})
}

export const getAllArticles = async (req, res) => {
    const serviceResult = await articlesService.getAllArticles({})
    res.status(200).json(serviceResult)
}

ArticlesController.getAllArticle = getAllArticles