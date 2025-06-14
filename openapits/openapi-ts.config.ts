import { defaultPlugins } from '@hey-api/openapi-ts';


export default {
  input: 'api-eafs/openapi.yaml',
  output: 'src/client',
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-fetch',
    'fastify', 
  ],
};