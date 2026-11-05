# jmobkey.github.io

Source for my personal site — tools and working notes on getting AI from proposal to production.

**Live at [jmobkey.github.io](https://jmobkey.github.io/)**

## What's here

| Page | |
|---|---|
| `/` | Work, capabilities, tools index and contact |
| `/about/` | Service record, from mechanical rooms to AI strategy |
| `/cost/` | Inference at scale calculator — what an LLM workload costs at production volume |
| `/ops/` | Operations at scale calculator — what a Make scenario actually meters |
| `/score/` | Use-case scoring matrix — ranks AI ideas by what survives delivery, not by the pitch |
| `/line/` | Where the line goes — decides which workflow steps a rule, a person or the model should own |

## Stack

Hand-written HTML, one shared stylesheet, one shared script. No framework, no build step, no dependencies, no analytics. Two web fonts and about 23KB of CSS and JS before compression.

The tools run entirely client-side. Nothing is sent anywhere, and there's no backend to send it to.

```
├── index.html
├── style.css          # theme variables, shared components, print styles
├── app.js             # theme toggle, scroll reveals, counters, plate tilt
├── 404.html
├── favicon.svg
├── og.png             # link-preview image, 1200x630
├── robots.txt
├── sitemap.xml
├── about/index.html
├── cost/index.html
├── ops/index.html
├── score/index.html
└── line/index.html
```

Theming is CSS custom properties on `html[data-theme]`, with the choice persisted to `localStorage` where the browser allows it. Dark is the default. Everything degrades under `prefers-reduced-motion`, without JavaScript, and in print.

## Why it's built this way

The site argues that people underestimate what things cost at production scale. Shipping that argument on a 400KB JavaScript bundle would be a poor look.

## Related

[automation-architecture](https://github.com/jmobkey/automation-architecture) — reliability standards and patterns for automation that gets depended on.

## Corrections

If something here is wrong, open an issue. It probably is somewhere, and I'd rather know.
