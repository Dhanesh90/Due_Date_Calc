# Deployment Guide

This application is a **Static Site** (HTML/CSS/JS only), which means it can be hosted for **FREE** on many platforms. Here are the easiest ways to get your app online.

## Option 1: Netlify (Easiest - Drag & Drop)

1.  **Sign Up**: Go to [netlify.com](https://www.netlify.com/) and sign up for a free account.
2.  **Log In**: Log in to your dashboard.
3.  **Deploy**:
    *   Locate the "Sites" tab in the dashboard.
    *   Find the area that says "Drag and drop your site output folder here".
    *   Drag the folder containing your project files (the folder with `index.html`) directly onto that drop zone.
4.  **Done!**: Netlify will upload the files and give you a live URL (e.g., `fluffy-clouds-12345.netlify.app`) instantly.

## Option 2: GitHub Pages (Best if using Git)

1.  **Create Repository**: Create a new public repository on GitHub.
2.  **Upload Files**: Push your code (`index.html`, `style.css`, etc.) to the repository.
    *   Ensure `index.html` is in the root folder.
3.  **Settings**:
    *   Go to the repository **Settings**.
    *   Click on **Pages** in the left sidebar.
    *   Under **Build and deployment**, set "Source" to `Deploy from a branch`.
    *   Select your main branch (usually `main` or `master`) and folder `/ (root)`.
    *   Click **Save**.
4.  **Done!**: Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Option 3: Vercel

1.  **Sign Up**: Go to [vercel.com](https://vercel.com/) and sign up.
2.  **Install CLI** (Optional method): Or use the web dashboard.
    *   **Web Dashboard**: Click "Add New Project", import from your Git repository (similar to GitHub Pages), and click "Deploy". It detects static sites automatically.
3.  **Done!**: Vercel provides a URL (e.g., `project-name.vercel.app`).

## Troubleshooting

- **Images not loading?**: Ensure the `assets` folder was uploaded and that file paths in the code match the filenames exactly (case-sensitive on some servers!).
- **404 Error?**: Make sure your main file is named `index.html` (lowercase).
