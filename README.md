# apia.org.au

The website of the **Australian Public Interest Alliance Incorporated** (APIA), a
not-for-profit incorporated association registered in Western Australia
(IARN A1046494Z, ABN 33 842 796 620).

APIA is the publisher and steward of record for the datasets it maintains, of which
the first is [Too Hard Basket](https://toohardbasket.org.au).

## What this is

Nine static pages built with [Astro](https://astro.build). There is no database, no
CMS, no server-side code and no form. The build output is plain files.

That is deliberate. This site is the end of the chain of trust for the data APIA
publishes — data → publisher → who they are → who funds them → who governs them — so
it should be the least interesting thing on the internet to attack. Nothing here
accepts input, so there is nothing to exploit and nothing to keep patched.

## Build

```sh
npm install
npm run build     # -> dist/
npm run dev       # local preview
```

Deployed to Cloudflare Pages. Build command `npm run build`, output directory `dist`.

## Editing content

Page content lives in `src/pages/*.astro` as plain markup — there is no content layer
to learn. The header, footer and navigation are in `src/layouts/Base.astro` and are
shared by every page, which is the main reason this is Astro rather than nine
hand-written HTML files: nine copies of a footer is how a small site drifts.

Two things are duplicated by necessity and must be kept in step:

- **APIA's legal facts** (registered name, ABN, registration number) appear on
  `/governance/` and `/contact/`, and again in `src/lib/about.ts` in the Too Hard
  Basket repository. The two sites disagreeing with each other is precisely what a
  hostile reader is looking for.
- **The description of Too Hard Basket** appears on `/` and `/projects/`. It must
  describe what the register actually publishes today, not what is planned.

## Licence

Code in this repository is MIT licensed. Data published by APIA is licensed CC BY 4.0
unless a page says otherwise; the APIA and Too Hard Basket names and logo are not
covered by either.
