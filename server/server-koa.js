import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import { Readable } from 'stream';
import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { template } from './template.js';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  const ssrResult = render(template());
  ctx.response.type = 'html';
  ctx.body = Readable.from(ssrResult);
});

app.use(mount('/dist', serve('./dist')));
app.use(router.middleware());

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
