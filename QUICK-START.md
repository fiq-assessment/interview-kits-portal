# ⚡ Quick Start Guide

## Local Development

```bash
# 1. Install dependencies
cd portal
pnpm install

# 2. Environment is already configured
# (.env.local is included with credentials)

# 3. Start server
pnpm dev

# 4. Open browser
# http://localhost:3000
```

## Vercel Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy portal"
git push
```

### Step 2: Import to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository

### Step 3: Add Environment Variable
1. Go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Name:** `CREDENTIALS`
   - **Value:** Copy from `.env.local.example`
   
```json
{"credentials":[{"username":"fiq-fe-beginner-2024","password":"Kx9#mP2vL@nR8qT!","role":"Frontend","level":"Beginner","test":"Product Catalog","testId":"fe-beginner"},{"username":"fiq-fe-inter-2024","password":"Zy4$wB7jN!hQ3sV@pF","role":"Frontend","level":"Intermediate","test":"Issue Tracker","testId":"fe-intermediate"},{"username":"fiq-fe-expert-2024","password":"Gm6#Dt9Rx!Wk2Lc$","role":"Frontend","level":"Expert","test":"Virtualized Logs","testId":"fe-expert"},{"username":"fiq-be-beginner-2024","password":"Pq5@Hn8Vb#Yx1Jt!","role":"Backend","level":"Beginner","test":"Products CRUD API","testId":"be-beginner"},{"username":"fiq-be-inter-2024","password":"Fw3!Zr7Km@Sg9Nv#Qc","role":"Backend","level":"Intermediate","test":"Orders & Checkout","testId":"be-intermediate"},{"username":"fiq-be-expert-2024","password":"Bj4$Xl6Tp!Mh8Wd@","role":"Backend","level":"Expert","test":"RBAC Platform","testId":"be-expert"},{"username":"fiq-fs-beginner-2024","password":"Cv2#Qk5Rf@Yp9Lg!","role":"Full-Stack","level":"Beginner","test":"Wellness Journal","testId":"fs-beginner"},{"username":"fiq-fs-inter-2024","password":"Nh7!Ws3Dz$Jm6Xb@Tk","role":"Full-Stack","level":"Intermediate","test":"Shipments Management","testId":"fs-intermediate"},{"username":"fiq-fs-expert-2024","password":"Rg8@Lv4Fn#Cq1Hp$","role":"Full-Stack","level":"Expert","test":"Admin Panel","testId":"fs-expert"}]}
```

3. Click **Save**

### Step 4: Deploy
Click **Deploy** and wait for build to complete!

## Test Login

Try any credential:
- Username: `fiq-fe-beginner-2024`
- Password: `Kx9#mP2vL@nR8qT!`

---

## ✅ What's Secure

- ✅ **Credentials NOT in code** - Environment variables only
- ✅ **Can't inspect browser** - Server-side verification
- ✅ **Interview repos clean** - No READMEs or instructions
- ✅ **Vercel deployment** - Works perfectly
- ✅ **Random passwords** - 16-20 character security

---

## 📁 What Was Cleaned

### Removed from ALL interview kits:
- ❌ README.md (instructions removed)
- ❌ scenario.json (requirements removed)

### Candidates only see:
- ✅ Boilerplate code
- ✅ Configuration files
- ✅ Must use portal for instructions

---

That's it! 🎉

