import { createFactory } from 'hono/factory';
import { zValidator } from '../../../../validator';
import { GetAllArticleContext } from './articles.context';
import {
getAllArticleQueryParams,
getAllArticleResponse
} from './articles.zod'

const factory = createFactory();
export const getAllArticleHandlers = factory.createHandlers(
zValidator('query', getAllArticleQueryParams),
zValidator('response', getAllArticleResponse),
async (c: GetAllArticleContext) => {

  },
);