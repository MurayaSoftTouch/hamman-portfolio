# 🚀 Netlify CI/CD Deployment Guide

## Stealth Deployment Setup for Hamman Muraya's Portfolio

This guide will help you set up automatic deployments to Netlify with live updates.

---

## 📋 Prerequisites

- GitHub account
- Netlify account (free at https://netlify.com)
- Git installed on your machine

---

## 🔧 Step-by-Step Setup

### Option 1: Connect via GitHub (Recommended - Automatic CI/CD)

#### 1. Push Your Code to GitHub

```bash
# Navigate to your portfolio directory
cd /home/la-patrona/portfolio

# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup with CI/CD"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/hamman-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 2. Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub**
4. Authorize Netlify to access your GitHub account
5. Select your `hamman-portfolio` repository
6. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20.x

#### 3. Deploy!

- Click **"Deploy site"**
- Wait for the build to complete (~2-3 minutes)
- Your site will be live at `https://your-site-name.netlify.app`

#### 4. Enable Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Netlify will automatically:
- Detect the push
- Build your project
- Deploy the updates
- Update your live site (usually in 1-2 minutes)

---

### Option 2: Manual Deployment via Netlify CLI

#### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 2. Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

#### 3. Initialize Your Site

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Select your team (if applicable)
- Site name: `hamman-muraya-portfolio` (or custom)
- Build command: `npm run build`
- Publish directory: `dist`

#### 4. Deploy

**For production deployment:**
```bash
netlify deploy --prod
```

**For preview deployment:**
```bash
netlify deploy
```

---

### Option 3: Drag & Drop (Quick Testing)

1. Build your project locally:
```bash
npm run build
```

2. Go to https://app.netlify.com/drop

3. Drag the `dist` folder to the upload area

4. Your site is live!

---

## 🔐 Environment Variables (If Needed)

If you need to add environment variables:

### Via Netlify Dashboard:
1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables (e.g., API keys)

### Via CLI:
```bash
netlify env:set VARIABLE_NAME value
```

---

## 🎨 Custom Domain Setup

1. Go to **Domain settings** in Netlify dashboard
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `hammanmuraya.com`)
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

---

## 📊 Deployment Features

### Automatic Features:
- ✅ **HTTPS/SSL** - Automatic and free
- ✅ **CDN** - Global content delivery
- ✅ **Continuous Deployment** - Auto-deploy on git push
- ✅ **Preview Deploys** - For pull requests
- ✅ **Rollback** - Instant rollback to previous versions
- ✅ **Form Handling** - Built-in form processing
- ✅ **Analytics** - Basic analytics included

### Build Information:
- **Build Time**: ~2-3 minutes
- **Deploy Time**: ~30 seconds
- **Bandwidth**: 100GB/month (free tier)
- **Build Minutes**: 300 minutes/month (free tier)

---

## 🔄 Making Live Updates

### Workflow:

1. **Make changes locally:**
```bash
# Edit your files
code .

# Test locally
npm run dev

# Open http://localhost:5173 to preview
```

2. **Commit and push:**
```bash
git add .
git commit -m "Update hero section with new design"
git push origin main
```

3. **Watch deployment:**
- Go to https://app.netlify.com
- Click on your site
- Watch the deploy progress in real-time
- Site updates automatically when build completes

4. **Verify live site:**
- Visit your Netlify URL
- Check that changes are live

---

## 🛠️ Troubleshooting

### Build Fails

**Check build logs:**
```bash
netlify deploy --debug
```

**Common issues:**
- Missing dependencies → Run `npm install`
- Node version mismatch → Check `netlify.toml`
- Build command errors → Check terminal output

### Site Not Updating

**Force new deploy:**
```bash
netlify deploy --prod --force
```

**Clear cache:**
In Netlify dashboard: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

---

## 📱 Mobile Preview

Netlify provides deploy previews for every commit:
- Each commit gets a unique preview URL
- Share preview URLs with clients/team
- No risk of breaking production

---

## 🔒 Security Best Practices

1. **Never commit sensitive data** to git
2. **Use environment variables** for API keys
3. **Enable deploy notifications** in Netlify
4. **Review deploy logs** regularly
5. **Set up branch protection** on GitHub

---

## 📈 Monitoring & Analytics

### Netlify Dashboard:
- **Deploys** - View all deployment history
- **Analytics** - Traffic and performance metrics
- **Forms** - View submitted forms
- **Functions** - Serverless functions (if used)

### Notifications:
- Email notifications for deploys
- Slack integration available
- GitHub status checks

---

## 🎯 Quick Commands Reference

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link to existing site
netlify link

# Deploy preview
netlify deploy

# Deploy production
netlify deploy --prod

# Open site in browser
netlify open

# View deploy logs
netlify deploy --build

# List all sites
netlify sites:list
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Netlify site created
- [ ] Build settings configured
- [ ] Custom domain added (optional)
- [ ] SSL certificate active
- [ ] Environment variables set (if needed)
- [ ] Test deployment successful
- [ ] Automatic deploys enabled
- [ ] Notifications configured

---

## 🎉 You're All Set!

Your portfolio is now configured for stealth CI/CD deployment with Netlify. Every time you push to GitHub, your changes will automatically go live!

**Live URL**: `https://your-site-name.netlify.app`

**Deploy Status**: Check at https://app.netlify.com

---

## 📞 Support

- Netlify Docs: https://docs.netlify.com
- Community Forum: https://answers.netlify.com
- Status Page: https://www.netlifystatus.com