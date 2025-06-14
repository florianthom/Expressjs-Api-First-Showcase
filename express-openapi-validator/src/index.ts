import express from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import path from 'path';
import bodyParser from 'body-parser';
import { RouteMetadata } from 'express-openapi-validator/dist/framework/openapi.spec.loader';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
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
      basePath: path.join(__dirname, "controller"),
      resolver: async (handlersPath: string, route: RouteMetadata, apiDoc: OpenAPIV3.DocumentV3 | OpenAPIV3.DocumentV3_1) => {
        const pathKey = route.openApiRoute.substring(route.basePath.length);
        const method = route.method.toLowerCase();
        const schema = (apiDoc as any).paths[pathKey][method];
        const operationId = schema.operationId
        const tag = schema.tags[0].toLowerCase();
        const controllerFile = `${tag}-controller.ts`;
        const modulePath = path.join(handlersPath, controllerFile);
        const handlerModule = await import(modulePath);
        return handlerModule[operationId]
      }
    },
  }),
);

app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`Article app listening on port ${port}`)
})