This application is a calculator which is capable doing basic calculations. This app is uses NextJS the React framework. The particular reason for picking NextJS for this project is because I wanted this calculator to be themable. Using NextJS enabled me to use Next-themes to manage the switching of themes depending on the user's system preferences.

For the design aspect, I made use of tailwindCSS and some of my predefined styles. The choice for TailwindCSS is to work much faster and build this application much faster.

For state and management of state, I used a reducer which is much better than using multiple usestate hooks. I maintained the state using the React context api. My choice of the context api is because we need the state values in different components and passing these values as props won't be very ideal.

All the buttons on this calculator except the % and the ± are fuly working and can carry out most simple arithmetic calculations accurately.

The calculator is live on vercel and the link is attached to this repository.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
