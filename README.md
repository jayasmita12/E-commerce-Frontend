# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).



## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app

# for Creaing Project , i am using 
pnpm create svelte@latest totalitycorp-frontend-challenge
```

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
 
 
## Tech Stacks
 ```bash
  . Svelte (Javascript UI library)
  . Javascript
  . Tailwind css
  . Vercel (for Deployment)
  . shadcn ui library
 ``` 
## My Approch

    First of this is not any Api fetch call inside my project . I  just collect all the projects and put it inside a js file . where i did filtering , sorting . Also Did the real time updates while adding item to cart and update and delete using - localStorage.

    This project upto basically logical building and problem solving . so that i m choosing this way . Rather than this i can do it with api fetching , query building as per required . Also the project is well structured . For service , server and storing data using svelte stores.
