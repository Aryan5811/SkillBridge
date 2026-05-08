# Contributing

## Local Development

1. Install dependencies from the repository root with `npm install`.
2. Copy `backend/.env.example` to `backend/.env`.
3. Copy `frontend/.env.example` to `frontend/.env.local`.
4. Run MongoDB locally or use `docker compose up mongo`.
5. Run `npm run seed` for demo data.
6. Run `npm run dev`.

## Pull Request Checklist

- Backend route changes include schema/model updates when needed.
- Frontend pages stay responsive across mobile and desktop.
- New marketplace behavior is represented in seed data or documented.
- Auth-protected routes use `requireAuth` and role-sensitive routes use `requireRole`.
- User-generated content that can affect trust is reportable or moderatable.
