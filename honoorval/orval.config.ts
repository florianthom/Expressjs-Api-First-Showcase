import { defineConfig } from 'orval';

export default defineConfig({
  articleApi: {
    input: {
      target: './api-eafs/openapi.yaml',
    },
    output: {
      mode: 'tags-split',
      client: 'hono',
      workspace: 'api-eafs/generated/',
      target: 'endpoints',
      schemas: 'schemas',
      override: {
        hono: {
            compositeRoute: 'routes.ts',
            validatorOutputPath: 'validator.ts',
        },
      },
    },
  },
});