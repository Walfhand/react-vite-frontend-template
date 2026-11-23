# React Vite Frontend Template

A React 19 and TypeScript starter with Vite, React Router, React Query, Tailwind CSS, and Vitest. Organize pages and shared components around feature folders in `src/features`.

## Start development

Choose **Use this template** on GitHub, clone your new repository, and run these commands with Node.js 24.

```sh
cp .env.example .env
npm ci
npm run dev -- --host 127.0.0.1
```

Open [the development server](http://127.0.0.1:3000). Set `VITE_API_URL` in `.env` to point to your API. The default points to the [modular monolith backend](https://github.com/Walfhand/dotnet-modular-monolith-template).

## Build and test

```sh
npm run build
npm run lint
npm test -- --run
```

The Docker image serves the compiled frontend on port 3000. Set `APP_API_URL` when starting the container to configure the API address at runtime.

For the frontend, backend, and PostgreSQL in one Docker Compose setup, use the [full-stack template](https://github.com/Walfhand/dotnet-react-fullstack-template).
