import express from 'express';
// const generatedApp = require('../api-eafs/generated-server');
// const myUsersController = require('./controller/users');
import {articlesRouter} from './src/routes/articles-routes.js'

const port = 3000
const app = express();
app.use(express.json());

// https://github.com/goldbergyoni/nodebestpractices
// https://github.com/practicajs/practica



//  // 1. Monkey patch the controller methods before use:
// const usersController = require('../generated/controllers/UsersController');
// usersController.getUsers = (req, res, next) => {
//   try {
//     const result = myUsersController.getUsers();
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// };



// app.use(generatedApp);
app.use("/", articlesRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})