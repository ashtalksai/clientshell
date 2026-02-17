# ClientShell

White-label client portal for small professional services firms. Make your 10-person operation look like a 100-person enterprise.

## Features

- **White-Label Branding** — Your logo, colors, subdomain. Clients never see "ClientShell".
- **30-Minute Setup** — Step-by-step wizard gets you live fast.
- **Activity Tracking** — Know when clients view documents.
- **Secure Documents** — Upload, set expiry, track downloads.
- **Project Tracking** — Kanban-style project status updates.
- **Client Messaging** — Threaded messages per project.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL + Prisma
- **Auth:** NextAuth.js (magic links via Resend)
- **Storage:** Supabase Storage (or S3)
- **Payments:** Stripe

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Push database schema
pnpm exec prisma db push

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── (admin)/        # Admin dashboard (firm users)
│   │   ├── dashboard/
│   │   ├── clients/
│   │   ├── projects/
│   │   ├── documents/
│   │   └── settings/
│   ├── portal/         # Client-facing portal (white-labeled)
│   │   ├── documents/
│   │   ├── projects/
│   │   └── messages/
│   ├── signup/
│   ├── login/
│   └── page.tsx        # Landing page
├── components/
│   ├── admin/          # Admin-specific components
│   ├── portal/         # Client portal components
│   ├── shared/         # Shared components
│   └── ui/             # shadcn/ui components
├── lib/
│   ├── auth.ts         # NextAuth configuration
│   └── db/             # Prisma client
└── types/              # TypeScript types
```

## Deployment

Configured for Coolify deployment with PostgreSQL.

```bash
# Build
pnpm build

# Deploy to clientshell.ashketing.com
```

## Pricing

- **Starter** $49/mo — 10 clients, 1 user
- **Pro** $99/mo — 50 clients, 5 users, activity tracking
- **Agency** $199/mo — Unlimited

## License

MIT
