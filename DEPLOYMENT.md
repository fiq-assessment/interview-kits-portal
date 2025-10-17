# 🚀 Portal Deployment Guide

## ✅ Repository Status

**GitHub Repository:** https://github.com/fiq-assessment/interview-kits-portal  
**Status:** ✅ Live and ready to deploy!

---

## 🌐 Quick Deploy Options

### 1. Vercel (Recommended - 2 minutes)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fiq-assessment/interview-kits-portal)

**Manual Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the portal directory
cd portal
vercel

# Follow prompts and deploy
```

**Automatic Deployments:**
- Every push to `main` triggers automatic deployment
- Preview deployments for pull requests
- Custom domains supported

---

### 2. Netlify (3 minutes)

1. Go to: https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `interview-kits-portal`
4. Build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next`
5. Click "Deploy site"

---

### 3. Docker (Self-hosted)

```bash
# Build the Docker image
docker build -t interview-portal .

# Run the container
docker run -d -p 3000:3000 --name portal interview-portal

# Access at http://localhost:3000
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  portal:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

---

### 4. AWS (Amplify)

1. Go to: https://console.aws.amazon.com/amplify/
2. Click "New app" → "Host web app"
3. Connect GitHub repository
4. Configure:
   - **Framework:** Next.js - SSR
   - **Build command:** `pnpm build`
   - **Base directory:** `/`
5. Deploy!

---

### 5. DigitalOcean (App Platform)

1. Go to: https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Choose GitHub and select repository
4. Configure:
   - **Type:** Web Service
   - **Build command:** `pnpm build && pnpm start`
   - **HTTP port:** 3000
5. Deploy!

---

## 🔧 Environment Variables

No environment variables required! All configuration is in the code.

**Optional Variables:**
- `NEXT_PUBLIC_ANALYTICS_ID` - For analytics tracking
- `NEXT_PUBLIC_GITHUB_ORG` - GitHub organization name (default: fiq-assessment)

---

## ⚙️ Build Configuration

The portal uses:
- **Node.js:** 20+
- **Package Manager:** pnpm
- **Build Command:** `pnpm build`
- **Start Command:** `pnpm start`
- **Dev Command:** `pnpm dev`

---

## 🌍 Custom Domain

### Vercel
1. Go to project settings
2. Add your custom domain
3. Update DNS records as instructed
4. SSL automatically configured

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS
4. Free SSL included

---

## 📊 Performance

The portal is optimized for:
- **Fast Initial Load** - < 2s
- **Lighthouse Score** - 95+
- **SEO Friendly** - Full SSR
- **Mobile Responsive** - 100%

---

## 🔒 Security

**Recommended Settings:**
- Enable HTTPS only
- Set up proper CORS if needed
- Use private repositories for interview kits
- Add basic auth if needed (via hosting platform)

---

## 📈 Monitoring

**Recommended Tools:**
- **Vercel Analytics** - Built-in with Vercel
- **Google Analytics** - Add tracking code
- **Sentry** - Error tracking
- **LogRocket** - Session replay

---

## 🚦 Health Checks

The portal homepage (`/`) serves as the health check endpoint.

**Status:** 200 = Healthy

---

## 🔄 Updates & Maintenance

### Updating Exercise Data

1. Edit `app/data/exercises.ts`
2. Commit and push to `main`
3. Automatic deployment triggers

### Adding New Exercises

1. Add to GitHub: `gh repo create fiq-assessment/new-exercise`
2. Add to `app/data/exercises.ts`
3. Push changes - auto-deploys

---

## 💰 Cost Estimates

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Vercel** | ✅ Free (hobby) | $20/mo (Pro) |
| **Netlify** | ✅ Free (100GB/mo) | $19/mo (Pro) |
| **DigitalOcean** | $5/mo | $10-40/mo |
| **AWS Amplify** | Free tier 1 year | $0.01/build minute |
| **Docker (VPS)** | $5/mo (DO/Linode) | $10-50/mo |

**Recommendation:** Start with Vercel free tier, upgrade if needed.

---

## 🎯 Production Checklist

- [x] Repository created on GitHub
- [x] Code pushed to main branch
- [x] README.md with setup instructions
- [x] All exercises link to correct repos
- [x] Responsive design tested
- [ ] Deploy to hosting platform
- [ ] Configure custom domain (optional)
- [ ] Set up analytics (optional)
- [ ] Enable monitoring (optional)

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** pnpm not found  
**Solution:** Use `npm` or install pnpm in build settings

**Issue:** Module not found  
**Solution:** Run `pnpm install` locally and commit lock file

### Runtime Errors

**Issue:** API routes not working  
**Solution:** Ensure using App Router configuration

**Issue:** Styles not loading  
**Solution:** Check `globals.css` import in `layout.tsx`

---

## 📞 Support

**GitHub Issues:** https://github.com/fiq-assessment/interview-kits-portal/issues  
**Organization:** https://github.com/fiq-assessment

---

## 🎉 Success!

Once deployed, share the URL with candidates:

**Portal URL:** `https://your-domain.com` (or Vercel URL)

Candidates can:
1. Browse all 9 exercises
2. Read detailed requirements
3. Clone repositories
4. Start coding!

---

**Happy interviewing! 🚀**

