# 🚀 Quick Start: Deploy to Netlify in 5 Minutes

## Option A: Automatic Deployment (Recommended - 5 minutes)

### 1. Push to GitHub (2 minutes)

```bash
cd /home/la-patrona/portfolio

# Initialize git (if not already done)
git init
git add .
git commit -m "Portfolio ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/hamman-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Connect to Netlify (3 minutes)

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your `hamman-portfolio` repo
5. Click **"Deploy site"**

**Done!** Your site is live at `https://random-name.netlify.app`

---

## Option B: CLI Deployment (3 minutes)

### 1. Install & Login

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login
```

### 2. Deploy

```bash
# Initialize (first time only)
netlify init

# Deploy
npm run netlify:deploy
```

**Done!** Your site is live!

---

## 🔄 Making Live Updates

### For GitHub Method (Automatic):

```bash
# Make your changes
# Then:
git add .
git commit -m "Updated hero section"
git push origin main

# Netlify auto-deploys in 1-2 minutes!
```

### For CLI Method (Manual):

```bash
# Make your changes
# Then:
npm run netlify:deploy
```

---

## 📱 View Your Site

- **Production**: `https://your-site-name.netlify.app`
- **Deploy Previews**: Available for every commit (GitHub method)

---

## 🎨 Custom Domain (Optional)

1. Go to Netlify Dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain
4. Update DNS records as instructed
5. SSL is automatic!

---

## ⚡ Quick Commands

```bash
# Deploy production
npm run netlify:deploy

# Deploy preview (draft)
npm run netlify:deploy:draft

# Login to Netlify
npm run netlify:login

# Initialize new site
npm run netlify:init

# Or use direct CLI commands
netlify deploy --prod
netlify deploy
netlify login
netlify init
```

---

## 🎯 That's It!

You now have stealth CI/CD deployment with Netlify:

✅ **Automatic builds** on git push  
✅ **Global CDN** for fast loading  
✅ **Free SSL/HTTPS**  
✅ **Preview deploys** for testing  
✅ **Instant rollbacks** if needed  
✅ **Form handling** included  
✅ **Analytics** built-in  

**Your portfolio updates automatically when you push to GitHub!** 🎉

---

## 📞 Need Help?

- **DEPLOYMENT.md** - Full deployment guide
- **setup-netlify.sh** - Automated setup script
- **Netlify Docs** - https://docs.netlify.com