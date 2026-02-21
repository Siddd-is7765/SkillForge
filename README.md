# SkillForge (MERN)

SkillForge is an AI-powered learning platform with courses, quizzes, leaderboard, blogging, and a real-time community forum.

## Monorepo Structure

```
/client   # React + Vite + Tailwind frontend (GitHub Pages compatible)
/server   # Node + Express + MongoDB + Socket.io backend
```

## Features
- JWT authentication with role-based access (`admin`, `user`)
- Course catalog and admin CRUD
- Quiz submission engine with score storage + leaderboard
- Progress tracking for watched lessons
- AI-style recommendation endpoint (interests + performance)
- Real-time forum updates via Socket.io
- Server-side search filtering and rate limiting
- Global dark mode toggle in frontend

---

## Local Development

### 1) Backend setup
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Set these values in `.env`:
- `PORT`
- `MONGO_URI` (MongoDB Atlas connection string)
- `JWT_SECRET`
- `CLIENT_URL` (frontend URL, e.g. `http://localhost:5173`)

### 2) Frontend setup
```bash
cd client
npm install
npm run dev
```

Optional env vars for frontend:
- `VITE_API_URL` (defaults to `http://localhost:5000/api`)
- `VITE_API_ROOT` (defaults to `http://localhost:5000` for Socket.io)

---

## Build (Static Frontend)
The frontend is configured with a production base path for GitHub Pages and uses `HashRouter` in production to avoid 404 refresh issues on static hosting.

```bash
cd client
npm run build
```

This generates static assets in `client/dist`.

---

## Deployment

### Frontend → GitHub Pages
1. Push repository to GitHub.
2. Build client and publish `client/dist` to Pages (Actions workflow or manual publish).
3. Ensure repository/project page path matches Vite base `/SkillForge/`.

### Backend → Render
1. Create a **Web Service** on Render from this repo.
2. Root Directory: `server`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add env vars from `.env.example` in Render dashboard.
6. Allow CORS by setting `CLIENT_URL` to your GitHub Pages URL.

### Database → MongoDB Atlas
1. Create cluster + database user.
2. Add network IP allowlist (or Render outbound range as needed).
3. Copy Atlas connection URI into `MONGO_URI`.

---

## API Overview
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/courses?search=&category=`
- `POST|PUT|DELETE /api/courses` (admin only)
- `GET /api/quizzes/:id`
- `POST /api/quizzes/:id/submit` (protected)
- `GET /api/quizzes/leaderboard`
- `GET /api/forum`
- `POST /api/forum/posts` (protected)
- `POST /api/forum/posts/:postId/comments` (protected, supports nested replies via `parentCommentId`)
- `POST /api/progress/watched` (protected)
- `GET /api/progress/:courseId` (protected)
- `GET /api/recommendations` (protected)

