/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns all articles
*
* articleQueryFilterDto ArticleQueryFilter  (optional)
* paginationFilterDto PaginationFilter  (optional)
* returns PageArticleList
* */
const getAllArticle = ({ articleQueryFilterDto, paginationFilterDto }) => new Promise(
  async (resolve, reject) => {
    try {

      const article = {
        id: 1,
        title: 'Sample Article',
        title2: "sadf"
      };

      resolve(Service.successResponse([article]));
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
