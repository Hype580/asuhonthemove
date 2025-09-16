# Vercel Deployment Guide

## Prerequisites
Your admin system is now configured to work with Vercel! Here's what you need to set up:

## 1. Vercel KV (Redis Database)
This stores your nanny data.

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** tab
3. Click **Create Database** → **KV**
4. Choose a name (e.g., "nannies-db")
5. Select your project
6. Copy the environment variables provided

## 2. Vercel Blob (File Storage)
This stores uploaded nanny images.

1. In Vercel Dashboard, go to **Storage** tab
2. Click **Create Database** → **Blob**
3. Choose a name (e.g., "nannies-images")
4. Select your project
5. Copy the environment variables provided

## 3. Environment Variables
Add these to your Vercel project:

### From Vercel KV:
```
KV_REST_API_URL=https://xxx.kv.vercel-storage.com
KV_REST_API_TOKEN=xxx
KV_REST_API_READ_ONLY_TOKEN=xxx
KV_URL=redis://xxx
```

### From Vercel Blob:
```
BLOB_READ_WRITE_TOKEN=xxx
```

### Admin Credentials (set these yourself):
```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password
```

## 4. Setting Environment Variables

### Option A: Vercel Dashboard
1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable one by one

### Option B: Vercel CLI
```bash
vercel env add KV_REST_API_URL
vercel env add KV_REST_API_TOKEN
vercel env add KV_REST_API_READ_ONLY_TOKEN
vercel env add KV_URL
vercel env add BLOB_READ_WRITE_TOKEN
vercel env add ADMIN_USERNAME
vercel env add ADMIN_PASSWORD
```

## 5. Deploy
```bash
vercel --prod
```

## 6. Access Your Admin Panel
After deployment:
- **Website**: `https://your-domain.vercel.app`
- **Admin Login**: `https://your-domain.vercel.app/admin/login`

## Benefits of This Setup

### ✅ Serverless-Ready
- No local file system dependencies
- Scales automatically with Vercel

### ✅ Fast Performance
- Redis for instant data access
- CDN-served images via Vercel Blob

### ✅ Reliable Storage
- Data persists across deployments
- Automatic backups and redundancy

### ✅ Cost-Effective
- Vercel KV: Free tier includes 30,000 commands/month
- Vercel Blob: Free tier includes 5GB storage

## Troubleshooting

### "KV not found" errors
- Ensure KV environment variables are set correctly
- Check that KV database is linked to your project

### "Blob upload failed" errors
- Verify BLOB_READ_WRITE_TOKEN is set
- Ensure Blob storage is linked to your project

### Migration issues
- First-time load will migrate existing nannies automatically
- Data will be stored in KV for future requests

## Data Migration
When you first visit `/api/nannies`, the system will:
1. Check if nannies exist in KV
2. If empty, automatically migrate all existing nannies
3. Store them in KV for future use

Your existing nannies (including the 6 new ones you added) will be preserved! 