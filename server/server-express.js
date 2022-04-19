import express from 'express';
import { Readable } from 'stream';
import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { template } from './template.js';
import { readStream } from './utils.js';

const app = express();
const port = 4000;

app.use('/dist', express.static('./dist'));

app.get('/', async (_, res) => {
  const ssrResult = await readStream(Readable.from(render(template())));
  res.status(200).send(ssrResult);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
