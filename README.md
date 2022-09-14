# 🌏 johnnychai.com

**How does it work?**

My JAMStack portfolio to display my projects, built using Next.js with Typescript. I integrated ```next-mdx-remote``` and ```gray-matter``` to read the MDX file, styling using Tailwind CSS, ESlint and Prettier to keep everything formatted.

- **Framwork**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

# Overview
- ```components``` - Layouts and reusable components.
- ```data/*``` - MDX files for my Work & Blog collection.
- ```lib/``` - Directory for storing Typescript's Interfaces.
- ```pages/*``` - General static pages and some URL slug.
- ```public/*``` - Static assets of favicon and images.
- ```styles/*``` - Global CSS styling with Tailwind CSS.

# 🚀 Quick start
Clone repository
```sh
git clone https://github.com/Johnmojo/johnnychai.com.git
```

Navigate into the cloned directory and start it up
```sh
cd johnnychai.com
npm install
npm run dev
```
