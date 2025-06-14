import express from 'express';
import {articlesRouter} from './src/routes/articles-routes.js'
import ExpressServer from './api-eafs/generated-server/expressServer.js';
import './src/controller/articles-controller.js';


const port = 3000
const app = express();
app.use(express.json());

// https://github.com/goldbergyoni/nodebestpractices
// https://github.com/practicajs/practica




// general:
// grad der api-first integration: types-only, types + routes, types an routen, compile-time abhängigkeit des codes von der openapi.yaml
// - java:  compile-time abhängigkeit über interfaces mit typen und routen-informationen
// - 


// stub generators:
// - express + openapigenerator/nodejs-express-server + typescript-fetch (still does not generated types route handler so a drift will fail silently, generates own openapi e.g. http://localhost:3000/api/v1/articles?articleQueryFilterDto[articleId]=af828a95-d1ef-4d09-86ce-df3609c9429c)
// - express + express-openapi-validator (anpassung der openapi mit vendor-flags) (aktuell betrachtet)
// - express + express-openapi (initialize({})) (bisher nicht betrachtet: deprecated)
// - express + openapi-stack/openapi-backend (bisher nicht betrachtet: vielversprechend, ausstehend)
// - fastify + fastify-openapi-glue
// - fastify + openapi-ts (bisher nicht betrachtet)
// - fastify + heyapi/openapi-ts (bisher nicht betrachtet)
// - hono + orval

const apiServer = new ExpressServer(-1, "./api-eafs/generated-server/api/openapi.yaml");

app.use("/", articlesRouter)
app.use("/", apiServer.app)

app.listen(port, () => {
  console.log(`Article app listening on port ${port}`)
})