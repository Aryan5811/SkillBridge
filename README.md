# SkillBridge

SkillBridge is a full-stack job marketplace for skilled workers and contractors. It includes a premium Next.js interface, Express/MongoDB API, JWT and Google auth hooks, Socket.io chat, Cloudinary upload routes, notification models, recommendations, maps-ready location data, and admin moderation foundations.

## Stack

- Frontend: Next.js App Router, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Socket.io
- Database: MongoDB with Mongoose
- Auth: JWT, OTP-ready login, Google OAuth token endpoint stub
- Integrations: Google Maps API, Cloudinary, Nodemailer email notifications

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

3. Start MongoDB locally or use MongoDB Atlas.

4. Seed sample data:

```bash
npm run seed
```

5. Run the app:

```bash
npm run dev
```

Frontend runs on `http://localhost:3000`; backend runs on `http://localhost:5000`.

## API Routes

- `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/google`, `GET /api/auth/me`
- `GET /api/jobs`, `GET /api/jobs/:id`, `POST /api/jobs`, `PATCH /api/jobs/:id`
- `GET /api/jobs/nearby`, `GET /api/jobs/recommendations/me`, `POST /api/jobs/:id/bookmark`
- `POST /api/applications/:jobId/apply`, `GET /api/applications/me`, `PATCH /api/applications/:id`
- `GET /api/users/workers`, `GET /api/users/:id`, `PATCH /api/users/me`
- `GET /api/users/recommendations/candidates/:jobId`
- `GET /api/messages`, `POST /api/messages`
- `POST /api/uploads`
- `GET /api/notifications`, `PATCH /api/notifications/:id/read`
- `POST /api/reviews`, `GET /api/reviews/:userId`, `POST /api/reports`
- `GET /api/admin/analytics`, `GET /api/admin/reports`, `PATCH /api/admin/reports/:id`

## Demo Accounts

After `npm run seed`:

- Admin: `admin@skillbridge.dev` / `password123`
- Contractor: `maya@buildcraft.dev` / `password123`
- Worker: `carlos@skillbridge.dev` / `password123`

## Environment Variables

Backend variables live in `backend/.env.example`; frontend variables live in `frontend/.env.example`. Google OAuth, Google Maps, Cloudinary, SMTP, and MongoDB are all optional for local UI exploration but required for production versions of those features.

## Deployment

- Deploy `frontend` to Vercel and set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SOCKET_URL`, and `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
- Deploy `backend` to Render/Fly/Railway and set MongoDB, JWT, Cloudinary, SMTP, and Google OAuth variables.
- Enable CORS for the deployed frontend URL.
- Use MongoDB Atlas indexes for `location` fields and text indexes for jobs/users.

## Docker

Run the complete local stack with:

```bash
docker compose up --build
```

This starts MongoDB, the Express API, and the Next.js app. Use `.env.production.example` as the production checklist for hosted environments.

## GitHub Publishing

See `docs/GITHUB_SETUP.md` for connector authorization and manual push instructions.

## Folder Structure

```text
backend/
  src/config     database and third-party clients
  src/middleware auth, validation, uploads
  src/models     mongoose schemas
  src/routes     REST API routes
  src/services   recommendations, notifications, resume parsing
  src/sockets    realtime messaging
frontend/
  app            Next.js pages
  components     dashboard, cards, nav, map, forms
  lib            API client and dummy data
```
