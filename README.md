# OpenMNC Admin & HR Portal (`openmnc-admin`)

Internal administrative management system, Content Management System (CMS), and applicant tracking dashboard for **OpenMNC LLP**.

---

## 🔒 Access & Security Policy

> **Confidential Internal Application:** Access to this repository is restricted to internal staff, operations, and administrators. External contractors and marketing developers should not be granted access to this repository.

---

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark Futuristic Aesthetic)
- **State & Routing:** React Router v6 + React Context API
- **Form Handling:** React Hook Form
- **API Client:** Axios with JWT Interceptors & Auto-refresh handling
- **Animations:** Framer Motion
- **Hosting:** Vercel

---

## 📁 Repository Structure

```
admin/
├── src/
│   ├── api/            # API client and service communication modules
│   │   ├── client.js   # Axios instance with Bearer JWT interceptor
│   │   ├── blogs.py    # Blog publication & management API
│   │   ├── careers.js  # Candidate application & job listing API
│   │   ├── media.js    # Cloudinary image upload API
│   │   ├── services.js # Service offering management API
│   │   └── settings.js # Global site settings & metrics API
│   ├── context/        # Authentication & global application state
│   │   └── AuthContext.jsx
│   ├── hooks/          # Custom hooks (useAuth, useApi)
│   ├── pages/admin/    # Administrative dashboard views
│   │   ├── AdminLogin.jsx        # Secure login interface
│   │   ├── AdminLayout.jsx       # Persistent sidebar shell
│   │   ├── Dashboard.jsx         # Live telemetry & KPI overview
│   │   ├── BlogsAdmin.jsx        # AI blog creator & markdown editor
│   │   ├── ApplicationsAdmin.jsx # Candidate tracker & resume reviewer
│   │   ├── CareersAdmin.jsx      # Job posting manager
│   │   ├── ServicesAdmin.jsx     # Business vertical editor
│   │   ├── ContactList.jsx       # Inquiries & lead manager
│   │   └── SettingsAdmin.jsx     # Branding, contacts & metrics editor
│   ├── utils/          # Helpers and formatters
│   ├── App.jsx         # Application routing & route protection guards
│   ├── index.css       # Tailwind base, utilities & glassmorphism classes
│   └── main.jsx        # React root mount
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file for local development:

| Variable Name | Required | Description |
|---|---|---|
| `VITE_API_URL` | **Yes (in production)** | Base URL of the backend API (e.g. `https://openmnc-backend.onrender.com/api`). In local development, leave empty to use Vite's proxy. |

---

## 🛠️ Local Development & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The admin portal will run on `http://localhost:5174`.

### 3. Build for Production
```bash
npm run build
```

---

## 🧪 Testing & Verification

1. Verify build compiles without errors:
   ```bash
   npm run build
   ```
2. Verify route protection by navigating directly to `http://localhost:5174/admin/dashboard` while logged out (must redirect to `/admin/login`).

---

## 🚢 Deployment (Vercel)

1. Connect this repository (`openmnc-admin`) to **Vercel**.
2. Framework Preset: **Vite**.
3. Environment Variables:
   - Add `VITE_API_URL` = `https://openmnc-backend.onrender.com/api`
4. Deploy to a custom subdomain (e.g. `admin.openmnc.com`).
