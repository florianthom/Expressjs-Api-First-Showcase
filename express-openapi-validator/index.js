import express from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import path from 'path';
import bodyParser from 'body-parser';
const __dirname = import.meta.dirname;

const port = 3000
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(
  OpenApiValidator.middleware({
    apiSpec: "api/openapi.yaml",
    validateRequests: true,
    validateResponses: true,
    operationHandlers: {
      basePath: path.join(__dirname, "src", "controller"),
      resolver: async (handlersPath, route, apiDoc) => {
        const pathKey = route.openApiRoute.substring(route.basePath.length);
        const method = route.method.toLowerCase();
        const schema = apiDoc.paths?.[pathKey]?.[method];
        const operationId = schema.operationId
        const tag = schema.tags[0].toLowerCase();
        const controllerFile = `${tag}-controller.js`;
        const modulePath = path.join(handlersPath, controllerFile);
        const handlerModule = await import(modulePath);
        return handlerModule[operationId]
      }
    },
  }),
);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`Article app listening on port ${port}`)
})