# Engineering Notebook

## React and TypeScript Frontend Foundation

The public frontend uses React and TypeScript with Vite to provide a maintainable, type-checked foundation for the production platform.

**Why it matters:**

React provides a component-based model for building the interface, while TypeScript catches many errors before runtime. Vite provides a repeatable path from source code to deployable static files that can be verified through CI and hosted through a production platform.

**Tradeoffs / limitations:**

React and TypeScript introduce build tooling, dependency management, and additional project complexity compared with simple HTML and JavaScript. These costs are justified by stronger type checking, reusable components, and a scalable structure for continued development.

**Evidence / verification:**

* Frontend source: `frontend/`
* Local development: `npm run dev`
* Lint: `npm run lint`
* Production build: `npm run build`
* Production output: `frontend/dist/`
* Frontend foundation pull request: `#___`