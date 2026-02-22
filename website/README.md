# KCLEML Website

A full-featured organisation website built with **Next.js**, ready to deploy on **Vercel**.

## Pages

| Page | Route | Features |
|---|---|---|
| Home | `/` | Hero, stats, about intro, programmes, news preview, newsletter CTA, careers teaser |
| About | `/about` | Mission/vision, values, team profiles, partners |
| News & Forum | `/news` | Filterable news feed, community forum with post submission |
| Careers | `/careers` | Job listings with filters, application modal |
| Newsletter | `/newsletter` | Subscription form with preferences, archive |
| Contact | `/contact` | Contact form with subject selection |

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: CSS Modules + Google Fonts (Playfair Display + DM Sans)
- **Deployment**: Vercel (zero-config)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js — click **Deploy**
5. Your site will be live in ~60 seconds

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts — deploy to production
vercel --prod
```

## Customisation Guide

### Branding
- **Logo**: Edit `src/components/Navbar.js` and `Footer.js` — change `KC` and `LEML` text
- **Colors**: Edit `src/styles/globals.css` — update CSS variables in `:root`
- **Fonts**: Change the Google Fonts import in `globals.css`

### Content
- **Home stats**: Edit the `stats` array in `src/pages/index.js`
- **Team members**: Edit the `team` array in `src/pages/about.js`
- **Job listings**: Edit the `openings` array in `src/pages/careers.js`
- **News articles**: Edit the `allNews` array in `src/pages/news.js`
- **Newsletter archive**: Edit the `archives` array in `src/pages/newsletter.js`

### Adding a Backend (Optional)
Forms currently submit locally. To connect to a real backend:
- Use **Vercel Serverless Functions** (`/pages/api/`)
- Connect to services like **Mailchimp** (newsletter), **Notion** or **Airtable** (forum/careers)
- Use **Formspree** or **EmailJS** for contact form

### Images
Replace placeholder boxes by adding images to the `/public` folder and using:
```jsx
import Image from 'next/image'
<Image src="/your-image.jpg" alt="..." fill />
```

## Environment Variables

No environment variables required for the base setup. If you add integrations, create a `.env.local` file:

```
MAILCHIMP_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

Add these in Vercel's dashboard under **Settings → Environment Variables**.
