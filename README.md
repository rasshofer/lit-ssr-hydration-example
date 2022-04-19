# Lit SSR/Hydration Example

> A quick and simple example and proof-of-concept for server-side-rendering and client-side hydration of a Lit application (with both Express and Koa)

## Why?

As part of a client project, the client’s SEO team wanted to make sure that using web components won’t have any negative impact on the SEO performance and that server-side rendering and client-side hydration of Lit components/applications is indeed possible. This repository is just a »technical breakthrough« and proof-of-concept for that. Part of it is to render semantic markup (e.g. H1) and hydrate components (e.g. buttons) with visually-invisible swapping.

![Alt text](./docs/ssr-result.png 'SSR result')

I thought this may be useful for others as well.

## Usage

### Build bundle

```sh
npm run build
```

### Start Koa example

```sh
npm run start:koa
```

Head over to <http://localhost:3000/>.

### Start Express example

```sh
npm run start:express
```

Head over to <http://localhost:4000/>.
