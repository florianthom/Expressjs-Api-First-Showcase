/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns all articles
*
* articleQueryFilterDto ArticleQueryFilter  (optional)
* returns PageArticleList
* */
const getAllArticle = ({ articleQueryFilterDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        articleQueryFilterDto,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getAllArticle,
};
