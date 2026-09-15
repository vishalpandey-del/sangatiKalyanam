# Sangati Kalyanam — Client

Frontend for the Sangati Kalyanam healing & astrology platform. This is the **M-E-R-N stack's React layer**; the Express + MongoDB API is a separate `server/` folder (not built yet).

Built with **React 19 + Vite + React Router 7 + Tailwind CSS 4**.

## Getting started

```bash
cd client
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle locally
```

## Structure

```
client/
├── index.html
├── vite.config.js          # React + Tailwind plugins, /api proxy to :5000
└── src/
    ├── main.jsx            # entry — Router + AppProvider
    ├── App.jsx             # route table
    ├── index.css           # Tailwind theme tokens + component classes
    ├── layouts/
    │   └── AppLayout.jsx   # sidebar + topbar + toast shell
    ├── components/
    │   ├── Sidebar.jsx     # nav, wallet mini-card, language switch
    │   ├── Topbar.jsx      # title, search, cart, notifications
    │   ├── Toaster.jsx     # stacked toast notifications
    │   ├── ui.jsx          # SectionHeader, StatCard, FeatureCard, FAQ, ...
    │   └── cards.jsx       # Expert / Webinar / Course / Product / Wallet
    ├── context/
    │   └── AppContext.jsx  # wallet balance, transactions, cart, toasts
    ├── data/               # seed content (swap for API calls)
    │   ├── experts.js
    │   └── catalog.js
    └── pages/              # one file per route
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, stats, featured experts, services, reviews |
| `/experts` | Expert directory with domain / language / online filters |
| `/consultation` | Chat, voice and video modes + billing explainer |
| `/webinars` | Upcoming live sessions |
| `/courses` | Self-paced course catalog |
| `/products` | Wellness store with a working cart |
| `/wallet` | Balance, add money, transaction history |
| `/register` | 5-step expert onboarding wizard |
| `/about` | Mission and platform pillars |
| `/help` | Support channels + FAQ accordion |

## What is wired up

State lives in `AppContext` and is shared across pages:

- **Wallet** — add money (validated), and every consultation, webinar, course or
  order debits the balance. Spending more than the balance is rejected with an error toast.
- **Cart** — add/remove products, quantity merging, live badge in the topbar, checkout from wallet.
- **Expert filters** — domain, free-text search (name/domain/language) and an "online now" toggle.
- **Registration** — per-step validation, multi-select domains, file selection, rate entry.

## Design tokens

The original palette is defined once in `src/index.css` under Tailwind v4's `@theme`,
so every colour is a real utility class (`bg-teal`, `text-rose`, `border-line`, …):

| Token | Value | | Token | Value |
| --- | --- | --- | --- | --- |
| `teal` | `#2D9B83` | | `violet` | `#7C6FCD` |
| `rose` | `#E8637A` | | `slate` | `#1E293B` |
| `amber` | `#F59E42` | | `surface` | `#F8FAFC` |

Each colour also has a light variant (`teal-l`, `rose-l`, `amber-l`, `violet-l`).

## Connecting the backend

`vite.config.js` proxies `/api` to `http://localhost:5000` in development.
To go live, replace the imports from `src/data/*` with fetches:

```js
const res = await fetch('/api/experts')
const experts = await res.json()
```

The seed objects already match the intended API response shape, so the components
need no changes.
