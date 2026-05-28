# Render Static Site Deployment Guide

This guide explains why your files may not be displaying correctly when hosted on **Render** as a static site and provides a step-by-step resolution to get your site live in minutes.

---

## 🔍 The Root Cause: Why Render Displays Nothing

When you deploy a static site from GitHub, Render spins up a high-performance Linux-based static server. There are three common reasons why it might display a blank screen or a `404 Not Found` error:

### 1. Incorrect "Publish Directory" (Most Common)
By default, Render looks for an `index.html` file in the directory specified as the **Publish Directory**. 
* If your HTML files are located in the root of your repository, the Publish Directory **must be set to `.` (dot) or left completely blank**.
* If you accidentally set the Publish Directory to `public`, `dist`, or `build`, Render will search for a folder with that name in your repo. Since those folders do not exist in our static codebase, it will serve an empty directory or a 404 page.

### 2. Linux Case-Sensitivity Mismatches
Windows is case-insensitive (e.g., `assets/CSS/style.css` and `assets/css/style.css` are treated the same). However, Render runs on Linux, which is **strictly case-sensitive**.
* If your HTML links to `assets/css/style.css` but the folder in your repo is named `assets/CSS/`, the browser will fail to load the styles, rendering the page completely blank or broken.
* *Note: All paths in our codebase are verified to be perfectly lowercase and match the filesystem exactly.*

### 3. Accidental "Build Command" Execution
Render auto-detects configuration scripts. Since this is a pure static HTML/CSS/JS portal, **no build command is required**. 
* If Render has populated a default build command (such as `npm run build` or `yarn build`), the build will fail because there is no package bundler configured. The Build Command **must be left completely blank**.

---

## 🛠️ Step-by-Step Resolution on Render

Follow these exact steps in your Render dashboard to fix the deployment:

1. **Log in to Render** and click on your **Tapaiko Rojgar** Static Site.
2. In the left-hand menu, click on **Settings**.
3. Scroll down to the **Build & Deploy** section.
4. Modify the following configurations:

| Setting | Correct Value | Rationale |
|---|---|---|
| **Build Command** | *Leave completely empty / blank* | No compilation is needed for pure static files. |
| **Publish Directory** | `.` | Forces Render to serve files directly from your repository's root. |

5. Click **Save Changes** at the bottom of the section.
6. Scroll back to the top of the page, click the **Manual Deploy** dropdown on the right, and select **Clear Cache & Deploy**.
7. Once the deploy status changes to **Live**, open your Render URL (e.g., `https://tapaiko-rojgar.onrender.com`). Your portal will display beautifully!

---

## 🌟 Advanced Render Optimization (Optional)

To make your static site load even faster and support premium custom routing, add these settings on Render:

### 1. Clean URLs (Redirects & Rewrites)
If you want users to be able to visit `yourdomain.com/about` instead of `yourdomain.com/about.html`, configure **Redirects/Rewrites** in the Render sidebar:

* Go to **Redirects/Rewrites** in your Render service settings.
* Click **Add Rule** and enter:
  * **Source Path**: `/*`
  * **Destination Path**: `/$1.html`
  * **Action**: `Rewrite` (This maps requests without `.html` extensions to their respective files behind the scenes).

### 2. Custom 404 Error Page
Render automatically serves a `404.html` file if a user requests a path that does not exist. We have pre-built a fully branded, premium [404.html](file:///c:/Users/NITRO/Documents/dipeshparajuli/tapaiko_rojgar/404.html) page for you. Render will automatically detect and serve this page on any broken URL!
