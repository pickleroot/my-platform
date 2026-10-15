**The Daily Byte — Sam Mayfield portfolio**

A Vite, React, and TypeScript landing page styled as a newspaper. The center profile contains the supplied personal facts. Six surrounding articles are original fictional sample copy, not live reporting. Departure Mono is served locally; its SIL Open Font License is included at `public/fonts/LICENSE`. The three pixel illustrations are original SVG assets.

**Run a fresh copy**

Use Node.js 22.12 or newer (Node 24 LTS is also suitable):

```sh
npm ci
npm run dev
```

The terminal prints the development URL. To check types and create the production output:

```sh
npm run build
```

This runs `tsc --noEmit` first, then `vite build`. The uploadable site is `dist/`. `npm run preview` serves that build locally; it does not create a Cloudflare branch preview.

**Bring this into your existing repository**

Work on a new branch, such as `portfolio/newspaper-landing`. Keep your working Cloudflare domain and preview settings.

1. Compare the supplied `frontend` folder with your repository's existing `frontend`. This is a complete standalone example, not an automatic patch for an unseen repository.
2. Bring across `src`, `public/fonts`, `public/images`, and the favicon as appropriate. If your existing app has other pages, integrate this `App` into its routing rather than deleting those pages.
3. Keep or adapt your existing `index.html`; it needs a `root` element and a script pointing to your React entry point. Bring across the title, description, and font preload if desired.
4. Compare `package.json` dependencies and scripts. For an existing project, keep unrelated dependencies and update its own lockfile with `npm install`; do not blindly replace a different project's lockfile.
5. Use the supplied Vite/TypeScript configurations only after comparing them with yours. This example uses the standard React Vite plugin, not `@cloudflare/vite-plugin`.
6. Keep your existing `wrangler.jsonc`, including custom domains, preview flags, and bindings. The optional `wrangler.example.jsonc` shows the assets-only portion; it is not auto-discovered and does not contain your real domain configuration.
7. Run `npm run build` from `frontend`. Check the preview branch's deployment on your custom domain, including a narrow/mobile viewport.
8. Read the walkthrough, answer the questions, and complete the small editing exercises before merging to `main`.

**Cloudflare Workers Builds**

With `frontend/package.json` and `frontend/wrangler.jsonc` in place:

| Setting | Value |
|---|---|
| Root directory | `frontend` |
| Build command | `npm run build` |
| Production deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |

Use a project-local Wrangler version supporting Worker Previews if your existing configuration uses them. Preserve the working version/settings from your existing project. Do not point Wrangler `main` at the browser's `src/main.tsx`.

**Content and behavior**

Edit personal facts and newspaper articles in `src/content.ts`. Component layout is in `src/components`, page composition is in `src/App.tsx`, and CSS is in `src/styles.css`. Each article has its own independent Read/Close control. The profile moves ahead of article columns on small screens. Section navigation uses real in-page links; no router is needed for one page.

There are no invented project achievements, testimonials, contact details, or social links. Add verified links inside the center profile when you are ready.

**Verification**

TypeScript checking and the Vite production build passed. An isolated DOM simulation checked all ten supplied profile facts, six article instances, navigation targets, unique DOM IDs, local images/font, the sample-copy disclosure, open/close behavior, `aria-expanded`, and independence between article states. Those temporary test dependencies are not included in the application or handoff.

A full browser layout/accessibility inspection was not available in this environment. Review the deployed preview at desktop and mobile widths, test keyboard navigation, and check the font before merging.

**Assets and attribution**

Departure Mono: Helena Zhang, https://departuremono.com/ and https://github.com/rektdeckard/departure-mono. Keep `public/fonts/LICENSE` with redistributed copies. All application code, article copy, and SVG illustrations in this example were created for this project.
