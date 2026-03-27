# Root Cause Apologetics (RCA) - Project Brain

This folder contains the core context for the RCA project to help AI assistants get up to speed quickly.

> [!IMPORTANT]
> **ANONYMITY REQUIREMENT**: This is an anonymous project. Never include personal names, local user paths (e.g., `C:\Users\...`), email addresses, or sensitive tokens in any documentation or code comments. Always use placeholders like `~` or `<REDACTED>`.

## Project Overview
- **Goal**: A website for Root Cause Apologetics.
- **URL**: [http://rootcauseapologetics.com/](http://rootcauseapologetics.com/)
- **GitHub Repo**: [rootcauseapologetics-arch/website](git@github.com:rootcauseapologetics-arch/website.git)

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Hobby Plan)

## Git & SSH Configuration
This project uses a dedicated SSH key and identity to isolate it from other projects.
- **Identity File**: `~/.ssh/id_ed25519_rsa` (local)
- **Public Key**: `<REDACTED_PUBLIC_KEY>`
- **Git Config**: Included via `~/.gitconfig-rca`
- **User Email**: `<REDACTED_EMAIL>`
- **SSH Command**: `ssh -i ~/.ssh/id_ed25519_rsa` (configured in local `.gitconfig`)

## Deployment Details
- **Hosting**: Vercel (Auto-deploys on push to `main`)
- **Important**: Ensure **Framework Preset** in Vercel Project Settings is set to **Next.js** (not Vite).
- **Custom Domain**: `rootcauseapologetics.com` (Configured in Vercel & Cloudflare)
- **DNS**: Managed via Cloudflare

## Helpful Commands
- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `git push`: Automatically triggers deployment to Vercel.
