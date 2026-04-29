# RCZ Capital — Next.js Website

Full-stack TikTok marketing agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Web3Forms key (see below)

# 3. Run development server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Email Setup (Contact Form)

The contact form sends emails to **info@rczcapital.com**.

### Option A: Web3Forms (Free — Recommended)
1. Go to [web3forms.com](https://web3forms.com)
2. Sign up with `info@rczcapital.com`
3. Copy your free access key
4. In `.env.local`, set: `WEB3FORMS_KEY=your_key_here`

### Option B: Resend (Production-grade)
1. Go to [resend.com](https://resend.com) and create an account
2. Create an API key
3. In `.env.local`, set: `RESEND_API_KEY=re_your_key`

If neither key is set, the form falls back to opening the visitor's email client with all fields pre-filled.

## Deployment

### Vercel (Recommended — Free)
```bash
npm i -g vercel
vercel
# Add env variables in Vercel dashboard under Settings → Environment Variables
```

### Other platforms
- Netlify, Railway, Render all support Next.js
- Add your environment variables in the platform dashboard

## Project Structure

```
rczcapital/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles sections)
│   ├── globals.css         # Global styles
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Pricing.tsx
│   ├── Consult.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── next.config.js
└── .env.local.example
```

## Customization

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Pricing**: Edit `components/Pricing.tsx` → `plans` array
- **Services**: Edit `components/Contact.tsx` → `services` array
- **Stats**: Edit `components/Hero.tsx` → stats section
