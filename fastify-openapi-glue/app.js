import firstRoute from './routes/example/index.js'
import Fastify from "fastify"
import openapiGlue from "fastify-openapi-glue";
import { Service } from "./src/service.js";

const options = {
  specification: `api-eafs/openapi.yaml`,
  serviceHandlers: new Service()
};


export default async function (fastify, opts) {
    fastify.register(firstRoute)
    fastify.register(openapiGlue, options);
}