This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## 📝 Content Management Guide

**For Club Members and Non-Technical Contributors**

This website updates automatically when you make changes to the files in this repository. You can edit content directly through the GitHub website.

### 📅 Updating Events
The events page is powered by the **Mass Cubed Google Calendar**.
1.  **Add/Edit Event**: Create or modify an event in the masscubed Google Calendar.
2.  **Update Speed**:
    *   **Calendar View**: Updates immediately.
    *   **Upcoming Events List**: Updates automatically **every day at 6 AM**.
    *   **Force Update**: If you need the list to update immediately, go to the [Actions tab](https://github.com/masscubed/masscubed.com/actions), select "Scheduled Calendar Update", and click "Run workflow". If there hasn't been an update to the website in 60 days, the workflow will need to be re-enabled. Once it is re-enabled it will trigger at 4:00 PM AEST.

### 👥 Updating Committee Members
Committee members are listed in `src/pages/committee.tsx`.

1.  **Open the file**: Go to [src/pages/committee.tsx](./src/pages/committee.tsx).
2.  **Edit**: Click the pencil icon ✏️ to edit.
3.  **Modify**: Find the `<CommitteeMember />` block you want to change:
    ```jsx
    <CommitteeMember
        name="Name (pronouns)"
        role="Role"
        bio="Write the full bio here..."
        imageUrl="/assets/images/people/filename.jpg" // Optional
    />
    ```
    *   Change the text between the quotes `""`.
    *   **Warning**: Do not remove the quotes or the `< />` brackets.
4.  **Save**: Scroll down, select "Commit directly to the main branch", and click **Commit changes**.
5.  **Live Site**: The site will rebuild and update in a few minutes.

### 🏠 Updating Text (Home, About, etc.)
*   **Home Page**: Edit [src/pages/index.tsx](./src/pages/index.tsx).
*   **Contact Page**: Edit [src/pages/contact.tsx](./src/pages/contact.tsx).
*   **Resources**: Edit [src/pages/resources.tsx](./src/pages/resources.tsx).

Look for the text inside plain tags (like `<p>`, `<h1>`, `<li>`) and edit strictly the text content.

### 🖼️ Adding Images
1.  Navigate to `public/assets/images` (or a subdirectory like `people`).
2.  Click **Add file** > **Upload files**.
3.  Upload your image (keep filenames simple, e.g., `nick.jpg`, no spaces).
4.  Commit changes.
5.  Reference it in code as `/assets/images/filename.jpg`.

<br>
<hr>
<br>

## 💻 Technical Development

### Setup & Run

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
