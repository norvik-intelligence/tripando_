# Tripando Production Setup

## Supabase

Project ref: `xlzhajlpmocipvdknhtv`
Project URL: `https://xlzhajlpmocipvdknhtv.supabase.co`
Region: `eu-west-1`

### Vercel Environment Variables

Set these in the Vercel project settings for Production, Preview and Development:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xlzhajlpmocipvdknhtv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<publishable-or-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key-from-supabase-dashboard>
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

Do not commit `SUPABASE_SERVICE_ROLE_KEY` to GitHub.

## Database

The production database has been initialized with core tables:

- organizations
- locations
- activities
- registrations
- leads

RLS is enabled. Public writes should go through server API routes, not client-side direct inserts.

## Current Backend Routes

- `GET /api/leads` health check
- `POST /api/leads` stores landing-page pilot requests
- `GET /api/activities` returns activities from Supabase or demo fallback
- `POST /api/activities` creates activities through server route

## App Routes

- `/` public landing page
- `/app` SaaS dashboard
- `/login` Supabase-ready login
