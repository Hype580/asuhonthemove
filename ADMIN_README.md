# Admin Panel Documentation

## Overview
The admin panel allows the website owner to manage nanny listings without requiring developer assistance. It includes authentication, image upload, and a live preview system.

## Features
- **Secure Authentication**: Simple login system with session management
- **Add New Nannies**: Form with image upload and live preview
- **Manage Existing Nannies**: View, edit, and delete existing nannies
- **Image Upload**: File upload with preview functionality
- **Live Preview**: See how the nanny card will look before saving

## Access Information

### Login Credentials
- **URL**: `/admin/login`
- **Username**: `admin` (can be changed via environment variable `ADMIN_USERNAME`)
- **Password**: `admin123` (can be changed via environment variable `ADMIN_PASSWORD`)

### Admin Routes
- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/nannies` - Manage existing nannies
- `/admin/nannies/add` - Add new nanny

## How to Add a New Nanny

1. **Login**: Go to `/admin/login` and enter credentials
2. **Navigate**: Click "Add New Nanny" from dashboard or navigation
3. **Fill Form**:
   - **Full Name**: Complete name of the nanny
   - **Photo**: Upload a high-quality image (will be resized automatically)
   - **Background Areas**: Add tags like "Childcare", "Nursing", etc. (press Enter or click Add)
   - **Education**: Educational background/qualifications
   - **Experience**: Work experience and relevant background
   - **Zoom Level**: Adjust image zoom (1.0 to 3.0)
   - **Image Position**: Control image positioning (e.g., "50% 40%")
4. **Preview**: See live preview on the right side
5. **Submit**: Click "Add Nanny" to save

## File Storage
- **Images**: Uploaded to `/public/uploads/` with timestamped filenames
- **Data**: Stored in `/data/nannies.json` as JSON file
- **Backup**: Original nannies are preserved in migration file

## Technical Details

### Data Structure
```typescript
interface Nanny {
  id?: string;
  name: string;
  image: string;
  background: {
    label: string;
    items: string[];
  };
  education: {
    label: string;
    value: string;
  };
  experience: {
    label: string;
    value: string;
  };
  zoom?: boolean;
  zoomLevel?: number;
  objectPosition?: string;
}
```

### API Endpoints
- `GET /api/nannies` - Public endpoint for fetching nannies
- `GET /api/admin/nannies` - Admin endpoint for managing nannies
- `POST /api/admin/nannies` - Create new nanny
- `DELETE /api/admin/nannies/[id]` - Delete nanny
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Environment Variables
```bash
ADMIN_USERNAME=admin          # Default: admin
ADMIN_PASSWORD=admin123       # Default: admin123
```

## Security Notes
- Sessions expire after 24 hours
- Only one admin user supported
- Image uploads are validated for file type
- Admin routes are protected by authentication middleware

## Migration
The system automatically migrates existing hardcoded nannies to the new storage system on first load. This ensures no data is lost during the transition.

## Troubleshooting

### Common Issues
1. **Login Issues**: Check username/password, ensure cookies are enabled
2. **Image Upload Fails**: Check file size and format (use JPG, PNG, WebP)
3. **Preview Not Showing**: Ensure all required fields are filled
4. **Data Not Saving**: Check browser console for errors

### Recovery
If data is lost, the migration endpoint can restore original nannies:
- POST to `/api/admin/migrate` (requires admin authentication) 