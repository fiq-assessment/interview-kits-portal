# 🎯 Interview Kits Portal

A centralized Next.js portal for accessing and managing 9 technical interview challenges across Frontend, Backend, and Full-Stack roles.

## 🌐 Live Portal

**Local Development:** http://localhost:3000  
**GitHub Organization:** https://github.com/FulfillmentIQ

---

## ✨ Features

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

# Run development server
pnpm dev
```

The portal will be available at: **http://localhost:3000**

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
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (exercise grid)
│   ├── globals.css         # Global styles
│   ├── data/
│   │   └── exercises.ts    # Exercise metadata
│   └── details/
│       └── [id]/
│           └── page.tsx    # Exercise detail pages
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
└── README.md               # This file
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

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub
2. Import in Vercel dashboard
3. Deploy with one click

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

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

1. **Share portal URL** with candidates
2. **Select appropriate challenge** based on role and level
3. **Set time limit** (90 minutes recommended)
4. **Review submission** via GitHub pull request

### For Candidates

1. **Browse available exercises** on the portal
2. **Read detailed requirements** on the detail page
3. **Clone the repository** using provided instructions
4. **Complete the challenge** within time limit
5. **Push to new branch** with your name
6. **Submit pull request** for review

---

## 🎯 What Makes This Portal Special

- **Self-Service** - Candidates can choose and start exercises independently
- **Clear Expectations** - Detailed requirements, tasks, and bonus items
- **Production-Ready** - All challenges include Docker, CI/CD, and best practices
- **Scalable** - Easy to add new exercises or modify existing ones
- **Professional** - Clean UI with smooth UX

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

