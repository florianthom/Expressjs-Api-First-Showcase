import express from 'express';
import {articlesRouter} from './src/routes/articles-routes.js'
import ExpressServer from './api-eafs/generated-server/expressServer.js';
import './src/controller/articles-controller.js';


const port = 3000
const app = express();
app.use(express.json());

// https://github.com/goldbergyoni/nodebestpractices
// https://github.com/practicajs/practica

const apiServer = new ExpressServer(-1, "./api-eafs/generated-server/api/openapi.yaml");

app.use("/", articlesRouter)
app.use("/", apiServer.app)

app.listen(port, () => {
  console.log(`Article app listening on port ${port}`)
})