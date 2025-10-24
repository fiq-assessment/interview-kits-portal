# 🎯 Interview Kits Portal

A centralized Next.js portal for accessing and managing 9 technical interview challenges across Frontend, Backend, and Full-Stack roles.

## 🌐 Live Portal

**Local Development:** http://localhost:3000  
**GitHub Organization:** https://github.com/FulfillmentIQ

---

## ✨ Features

- **🔐 Secure Login System** - Each test has unique credentials with name capture
- **👤 Personalized Experience** - Candidates see only their assigned test
- **9 Interview Challenges** - Beginner, Intermediate, and Expert levels
- **Beautiful UI** - Modern gradient design with smooth interactions
- **Detailed Instructions** - Complete setup guides for each challenge
- **GitHub Integration** - Direct links to all repositories
- **Responsive Design** - Works on all screen sizes
- **Easy Navigation** - Clear organization by role and difficulty

---

## 📦 Interview Kits

### Frontend (3 Challenges)
1. **Product Catalog** (Beginner) - Search, filters, sorting, pagination
2. **Issue Tracker** (Intermediate) - Optimistic UI, inline editing
3. **Virtualized Logs** (Expert) - Performance optimization, 10k+ items

### Backend (3 Challenges)
4. **Products CRUD API** (Beginner) - MongoDB, validation, REST API
5. **Orders & Checkout** (Intermediate) - Transactions, idempotency
6. **RBAC Platform** (Expert) - Role-based access, Redis caching

### Full-Stack (3 Challenges)
7. **Wellness Journal** (Beginner) - Mood tracking, charts
8. **Shipments Management** (Intermediate) - CSV import, transactions
9. **Admin Panel** (Expert) - JWT auth, RBAC, caching

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ 
- **pnpm** 8+

### Installation

```bash
# Clone the portal repository
git clone https://github.com/FulfillmentIQ/interview-kits-portal.git
cd interview-kits-portal

# Install dependencies
pnpm install

# Copy environment file (required)
cp .env.local.example .env.local
# The .env.local file contains the CREDENTIALS environment variable

# Run development server
pnpm dev
```

The portal will be available at: **http://localhost:3000**

**⚠️ Important:** The `.env.local` file is required and contains sensitive credentials. It is git-ignored for security.

### Vercel Deployment

For Vercel deployment, add the `CREDENTIALS` environment variable in your Vercel dashboard.  
See `VERCEL-DEPLOYMENT.md` for detailed instructions.

### 🔐 Secure Login System

The portal features enterprise-grade authentication with server-side verification:

1. **Login Page:** Candidates enter their assigned username and password
2. **Server Verification:** Credentials verified via secure API (not in browser)
3. **Name Capture:** After authentication, candidates enter their full name
4. **Personalized View:** Each candidate sees ONLY their assigned test
5. **9 Unique Credentials:** Stored securely server-side (see `CREDENTIALS.md`)

**Security Features:**
- ✅ Credentials stored in `credentials.json` (server-side only, git-ignored)
- ✅ Verification via API route (`/api/auth/login`)
- ✅ No passwords exposed in browser source code
- ✅ Cannot be inspected via browser dev tools

**Example Credentials:**
- Frontend Beginner: `fiq-fe-beginner-2024` / `Kx9#mP2vL@nR8qT!`
- Backend Expert: `fiq-be-expert-2024` / `Bj4$Xl6Tp!Mh8Wd@`
- Full-Stack Intermediate: `fiq-fs-inter-2024` / `Nh7!Ws3Dz$Jm6Xb@Tk`

📄 **Full credentials list:** See `CREDENTIALS.md`  
📖 **Login system docs:** See `LOGIN-SYSTEM.md`

---

## 🛠️ Tech Stack

- **Next.js 14** - App Router
- **React 18** - UI framework
- **TypeScript** - Type safety
- **CSS-in-JS** - Inline styles for simplicity

---

## 📂 Project Structure

```
portal/
├── app/
│   ├── layout.tsx             # Root layout with AuthProvider
│   ├── page.tsx               # Home page (personalized for user)
│   ├── login/
│   │   └── page.tsx           # Login page with 2-step auth
│   ├── components/
│   │   └── AuthProvider.tsx   # Authentication wrapper
│   ├── globals.css            # Global styles
│   ├── data/
│   │   └── exercises.ts       # Exercise metadata
│   └── details/
│       └── [id]/
│           └── page.tsx       # Exercise detail pages
├── CREDENTIALS.md             # Login credentials for all 9 tests
├── LOGIN-SYSTEM.md            # Authentication system documentation
├── public/                    # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
└── README.md                  # This file
```

---

## 🎨 Customization

### Update Exercise Data

Edit `app/data/exercises.ts` to modify:
- Exercise descriptions
- GitHub repository URLs
- Tech stack
- Tasks and bonus items
- Time limits
- Pagination types

### Update Styling

Modify styles in:
- `app/globals.css` - Global styles and card components
- Individual component files - Inline styles for specific components

### Add New Exercises

1. Add new exercise to `app/data/exercises.ts`
2. The portal will automatically display it on the home page
3. Detail pages are generated dynamically

---

## 📋 Available Scripts

```bash
# Development
pnpm dev          # Start dev server (http://localhost:3000)

# Build
pnpm build        # Build for production
pnpm start        # Start production server

# Linting
pnpm lint         # Run ESLint
```

---

## 🌍 Deployment

### Deploy Options

**Netlify:**
```bash
pnpm build
# Deploy the .next folder
```

**Docker:**
```bash
# Build image
docker build -t interview-portal .

# Run container
docker run -p 3000:3000 interview-portal
```

### Environment Variables

No environment variables required for basic functionality. All configuration is in `app/data/exercises.ts`.

---

## 🔗 Integration

### Link to Interview Repositories

All exercises include direct links to their GitHub repositories with:
- Clone instructions
- Setup commands
- Running instructions
- Access URLs

Candidates can click any exercise card to:
1. View detailed requirements
2. See the technology stack
3. Access setup instructions
4. Clone the repository

---

## 📝 Usage for Interviews

### For Interviewers

1. **Share portal URL and credentials** with candidates (via email/Slack)
2. **Provide appropriate test credentials** from `CREDENTIALS.md`
3. **Candidate logs in** and sees only their assigned test
4. **Set time limit** (90 minutes recommended)
5. **Review submission** via GitHub pull request

### For Candidates

1. **Navigate to portal URL** provided by interviewer
2. **Login** with your assigned credentials
3. **Enter your full name** when prompted
4. **View your assigned test** (only one test will be visible)
5. **Read detailed requirements** on the detail page
6. **Clone the repository** using provided instructions
7. **Complete the challenge** within time limit
8. **Push to new branch** with your name
9. **Submit pull request** for review
10. **Logout** when finished

### Login Flow

```
Portal URL → Login Page → Enter Credentials → Enter Name → See Assigned Test → Start Challenge
```

---

## 🎯 What Makes This Portal Special

- **Secure & Personalized** - Each candidate gets unique credentials and sees only their test
- **Self-Service** - Candidates can start their assigned exercise independently
- **Clear Expectations** - Detailed requirements, tasks, and bonus items
- **Production-Ready** - All challenges include Docker, CI/CD, and best practices
- **Scalable** - Easy to add new exercises or modify existing ones
- **Professional** - Clean UI with smooth UX and modern design

---

## 🤝 Contributing

To add or modify exercises:

1. Update `app/data/exercises.ts`
2. Ensure GitHub repository exists and is accessible
3. Test the portal locally
4. Submit pull request

---

## 📞 Support

For issues or questions:
- **GitHub Issues** - Create an issue in this repository
- **Organization** - Contact FulfillmentIQ admins

---

## 📄 License

Private - For FulfillmentIQ organization use only.

---

## 🎉 Credits

Built with ❤️ using Next.js, React, and TypeScript.

**Organization:** [FulfillmentIQ](https://github.com/FulfillmentIQ)  
**Year:** 2025

