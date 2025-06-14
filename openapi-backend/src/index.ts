import express from "express";
import bodyParser from 'body-parser';
import { OpenAPIBackend } from 'openapi-backend';
import type { Request } from 'openapi-backend';
import * as articlesController from "./controller/articles-controller.js"
import addFormats from 'ajv-formats';

const port = 3000;

const api = new OpenAPIBackend({
  definition: './api/openapi.yaml',
  // not working
  // validate: true, coerceTypes: true,
  handlers: {
    ...articlesController
  },
  customizeAjv: (ajv) => {
    addFormats(ajv);
    return ajv;
  },
});
api.init();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use((req, res) => api.handleRequest(req as Request, req, res));

app.listen(port, () => {
  console.log(`Article app listening on port ${port}`)
})