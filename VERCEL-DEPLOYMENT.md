# 🚀 Vercel Deployment Guide

## Environment Variable Setup

Since `credentials.json` is not committed to the repository, you need to add credentials as an environment variable in Vercel.

### Steps:

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add new variable:**
   - **Name:** `CREDENTIALS`
   - **Value:** (Copy from `.env.local.example` or use the JSON below)

```json
{"credentials":[{"username":"fiq-fe-beginner-2024","password":"Kx9#mP2vL@nR8qT!","role":"Frontend","level":"Beginner","test":"Product Catalog","testId":"fe-beginner"},{"username":"fiq-fe-inter-2024","password":"Zy4$wB7jN!hQ3sV@pF","role":"Frontend","level":"Intermediate","test":"Issue Tracker","testId":"fe-intermediate"},{"username":"fiq-fe-expert-2024","password":"Gm6#Dt9Rx!Wk2Lc$","role":"Frontend","level":"Expert","test":"Virtualized Logs","testId":"fe-expert"},{"username":"fiq-be-beginner-2024","password":"Pq5@Hn8Vb#Yx1Jt!","role":"Backend","level":"Beginner","test":"Products CRUD API","testId":"be-beginner"},{"username":"fiq-be-inter-2024","password":"Fw3!Zr7Km@Sg9Nv#Qc","role":"Backend","level":"Intermediate","test":"Orders & Checkout","testId":"be-intermediate"},{"username":"fiq-be-expert-2024","password":"Bj4$Xl6Tp!Mh8Wd@","role":"Backend","level":"Expert","test":"RBAC Platform","testId":"be-expert"},{"username":"fiq-fs-beginner-2024","password":"Cv2#Qk5Rf@Yp9Lg!","role":"Full-Stack","level":"Beginner","test":"Wellness Journal","testId":"fs-beginner"},{"username":"fiq-fs-inter-2024","password":"Nh7!Ws3Dz$Jm6Xb@Tk","role":"Full-Stack","level":"Intermediate","test":"Shipments Management","testId":"fs-intermediate"},{"username":"fiq-fs-expert-2024","password":"Rg8@Lv4Fn#Cq1Hp$","role":"Full-Stack","level":"Expert","test":"Admin Panel","testId":"fs-expert"}]}
```

4. **Save and redeploy**

The portal will now work on Vercel with credentials securely stored as environment variables!

### Local Development

For local development, create `.env.local`:

```bash
cp .env.local.example .env.local
```

The app will use the `CREDENTIALS` environment variable automatically.

