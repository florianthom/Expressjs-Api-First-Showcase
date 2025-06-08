/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns user by id
*
* id UUID Input the id of the article you want to get
* returns Article
* */
const getArticles = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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
  getArticles,
};
