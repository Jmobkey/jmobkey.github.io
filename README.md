# jmobkey.github.io

Source for my personal site — tools and working notes on getting AI from proposal to production.

**Live at [jmobkey.github.io](https://jmobkey.github.io/)**

## What's here

| Page | |
|---|---|
| `/` | Work, capabilities, and the tools index |
| `/about/` | Service record, from mechanical rooms to AI strategy |
| `/cost/` | Inference at scale calculator — what an LLM workload costs at production volume |
| `/ops/` | Operations at scale calculator — what a Make scenario actually meters |

## Stack

Hand-written HTML, one shared stylesheet, one shared script. No framework, no build step, no dependencies, no analytics. Two web fonts and about 20KB of CSS and JS.

Both calculators run entirely client-side. Nothing is sent anywhere, and there's no backend to send it to.

```
├── index.html
├── style.css          # theme variables, shared components
├── app.js             # theme toggle, scroll reveals, counters, plate tilt
├── about/index.html
├── cost/index.html
└── ops/index.html
```

Theming is CSS custom properties on `html[data-theme]`, with the choice persisted to `localStorage`. Dark is the default. Everything degrades under `prefers-reduced-motion`.

## Why it's built this way

The site argues that people underestimate what things cost at production scale. Shipping that argument on a 400KB JavaScript bundle would be a poor look.

## Related

[automation-architecture](https://github.com/jmobkey/automation-architecture) — reliability standards and patterns for automation that gets depended on.

## Corrections

If something here is wrong, open an issue. It probably is somewhere, and I'd rather know.
