# 🎯 QA Tester & Quality Assurance Portfolio

A modern, creative, and professional portfolio website crafted specifically for **QA Testers, QA Engineers, and Software Quality Specialists**. Designed with a dark tech theme, subtle cyan/emerald accents, interactive test runners, realistic bug ticket inspectors, and ATS-friendly resume previews.

---

## ⚡ Quick Start & Local Preview

The website is already built and running locally!

```bash
# To run the development server:
npm run dev

# To build for production:
npm run build

# To preview the production build locally:
npm run preview
```

Open [http://localhost:4173](http://localhost:4173) (or `http://localhost:3000` during dev) in your browser.

---

## ✏️ How to Customize Your Portfolio (In 1 Minute!)

Everything in this portfolio is cleanly separated into a single configuration file:
👉 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` to change:
- **`personalData`**: Your name, role, email, LinkedIn URL, GitHub, location, and tagline.
- **`aboutData`**: Your personal QA background, core testing values, and QA philosophy.
- **`skillsData`**: Add, edit, or adjust proficiency levels for Manual Testing, API Testing, Mobile Testing, Web Testing, Jira, Postman, etc.
- **`projectsData`**: Your real project case studies, test coverage, defect counts, testing approaches, and custom Jira-style bug ticket examples!
- **`experienceData`**: Your work history (sanitized for NDAs or with real company names).
- **`learningData`**: What you are currently studying (Playwright, SQL, Automation, AI in QA) with progress percentages.

Save the file and the website instantly updates!

---

## 🚀 Free Deployment Guide

Publish your portfolio with a **free shareable URL** in under 3 minutes using either **Vercel** or **Netlify**.

### Option 1: Deploy with Vercel (Recommended — Simplest & Fastest)

#### Via Vercel Web Dashboard (No terminal needed):
1. Create a free account at [vercel.com](https://vercel.com).
2. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial QA Portfolio"
   # Create a repository on github.com and link it:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```
3. In Vercel, click **"Add New"** > **"Project"** and select your GitHub repo.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your live URL (e.g. `https://your-portfolio.vercel.app`) will be ready in 30 seconds!

#### Or via Vercel CLI:
```bash
npx vercel
```
Follow the 3 quick prompts and your site is live!

---

### Option 2: Deploy with Netlify (Easiest Drag-and-Drop)

#### Drag-and-Drop Method (Zero Git required!):
1. In your project terminal, make sure the production build exists:
   ```bash
   npm run build
   ```
2. This creates a folder named **`dist`** inside your project directory (`c:\Users\darsh\OneDrive\Desktop\portfolio\dist`).
3. Log in to [netlify.com](https://app.netlify.com/drop) (free).
4. Drag and drop the **`dist`** folder directly into the Netlify drop zone.
5. Done! Netlify immediately gives you a live shareable URL like `https://darshan-qa-portfolio.netlify.app`.

#### Or via Netlify CLI:
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🛠️ Features Included

- **Hero Section**: High-impact QA headline, role pill, and quick metrics bar.
- **Interactive QA Smoke Test Runner**: A live terminal widget in the hero where recruiters can click "Re-run" and watch test suites execute with pass assertions.
- **About Me**: Clear QA philosophy, defect prevention mindset, and 4-phase test lifecycle.
- **Skills Matrix**: Categorized filterable skills covering Manual, Web, Mobile, API (Postman), Bug Reporting, Test Cases, Regression, Agile, and AI-assisted QA.
- **Case Studies & Bug Ticket Inspector**: Expandable Jira-style bug tickets with reproduction steps, environment specs, and Expected vs Actual diffs.
- **NDA-Sanitized Experience**: Professional timeline showcasing responsibilities and metrics while honoring non-disclosure agreements.
- **Learning & Growth**: Active upskilling roadmap for SQL, Playwright, Automation, and AI testing.
- **Resume Modal & Print Preview**: Recruiters can view an ATS-friendly structured resume directly on the site and print/save it as PDF with `Ctrl+P`.
- **Contact Form & Quick Actions**: 1-click email copy, direct LinkedIn integration, and message generator.
