# NJOY Travel & Tours Website

A modern full-stack travel and tours website built with Next.js, TypeScript, Tailwind CSS, Firebase, and deployed on AWS.

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Firebase Firestore** - NoSQL database
- **Firebase Authentication** - User authentication
- **Firebase Storage** - File and image storage

### Cloud & Deployment
- **AWS** - Cloud hosting and services
  - **AWS Amplify** (recommended) - Full-stack hosting
  - **AWS EC2** - Virtual servers
  - **AWS S3** - Static assets (if not using Firebase Storage)
  - **AWS CloudFront** - CDN for performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Firebase account and project
- AWS account (for deployment)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Enable Storage (optional, for image uploads)
   - Get your Firebase config from Project Settings

3. **Set up environment variables:**
   Create a `.env.local` file:
   ```env
   # Firebase Client Config (Public - safe to expose)
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

   # Firebase Admin (Server-side only - keep secret!)
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
   # OR use Application Default Credentials
   # GOOGLE_APPLICATION_CREDENTIALS=path/to/serviceAccountKey.json
   ```

4. **Set up Firestore Security Rules:**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can read/write their own data
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Tours are readable by all, writable by admins
       match /tours/{tourId} {
         allow read: if true;
         allow write: if request.auth != null; // Add admin check in production
       }
       
       // Bookings: users can read/write their own
       match /bookings/{bookingId} {
         allow read, write: if request.auth != null && 
           (resource.data.userId == request.auth.uid || 
            request.auth.token.admin == true);
       }
     }
   }
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── auth/         # Authentication endpoints
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
├── lib/                  # Utility functions
│   ├── firebase.ts      # Firebase client initialization
│   ├── firebase-admin.ts # Firebase admin (server-side)
│   ├── firestore.ts     # Firestore operations
│   └── auth.ts          # Authentication helpers
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema (Firestore Collections)

### Users Collection
```typescript
{
  id: string
  name?: string
  email: string
  emailVerified?: boolean
  image?: string
  createdAt: Date
  updatedAt: Date
}
```

### Tours Collection
```typescript
{
  id: string
  title: string
  description: string
  destination: string
  duration: number // in days
  price: number
  image?: string
  images: string[]
  maxCapacity: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
```

### Bookings Collection
```typescript
{
  id: string
  tourId: string
  userId: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  startDate: Date
  endDate: Date
  createdAt: Date
  updatedAt: Date
}
```

## AWS Deployment Options

### Option 1: AWS Amplify (Recommended - Easiest)

1. **Connect Repository:**
   - Push code to GitHub/GitLab/Bitbucket
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your repository

2. **Configure Build Settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Add Environment Variables:**
   - Add all Firebase environment variables in Amplify Console
   - Build and deploy!

### Option 2: AWS EC2 (More Control)

1. **Launch EC2 Instance:**
   - Choose Ubuntu/Amazon Linux
   - Configure security groups (open ports 22, 80, 443, 3000)

2. **Install Dependencies:**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

3. **Deploy Application:**
   ```bash
   # Clone repository
   git clone <your-repo>
   cd TechHenu-Travel-Website
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "travel-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx Reverse Proxy:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 3: AWS Elastic Beanstalk

1. **Install EB CLI:**
   ```bash
   pip install awsebcli
   ```

2. **Initialize:**
   ```bash
   eb init
   eb create
   eb deploy
   ```

3. **Configure Environment Variables:**
   ```bash
   eb setenv NEXT_PUBLIC_FIREBASE_API_KEY=...
   ```

## Additional Services & Recommendations

### Essential Additions:

1. **Payment Processing:**
   - **Stripe** - Most popular, great documentation
   - **PayPal** - Alternative payment option
   - **AWS Payment Cryptography** - For enterprise solutions

2. **Email Service:**
   - **AWS SES** (Simple Email Service) - Cost-effective
   - **SendGrid** - Easy integration
   - **Firebase Extensions** - Email triggers

3. **Image Optimization:**
   - **Firebase Storage** - Already included
   - **AWS S3 + CloudFront** - Alternative
   - **Cloudinary** - Advanced image processing

4. **Analytics:**
   - **Google Analytics** - Web analytics
   - **Firebase Analytics** - User behavior
   - **AWS CloudWatch** - Application monitoring

5. **Search Functionality:**
   - **Algolia** - Powerful search
   - **AWS CloudSearch** - Managed search
   - **Firestore queries** - Basic search (already available)

6. **Maps & Location:**
   - **Google Maps API** - Interactive maps
   - **Mapbox** - Alternative mapping
   - **AWS Location Service** - Geocoding and maps

7. **Real-time Features:**
   - **Firebase Realtime Database** - Real-time updates
   - **Firestore real-time listeners** - Already available
   - **AWS AppSync** - GraphQL with real-time

8. **CDN & Performance:**
   - **AWS CloudFront** - Global CDN
   - **Vercel Edge Network** - If using Vercel
   - **Firebase Hosting** - Alternative to AWS

### Security Enhancements:

1. **Rate Limiting:**
   - **AWS WAF** - Web Application Firewall
   - **Cloudflare** - DDoS protection

2. **SSL/TLS:**
   - **AWS Certificate Manager (ACM)** - Free SSL certificates
   - **Let's Encrypt** - Alternative

3. **Secrets Management:**
   - **AWS Secrets Manager** - Store sensitive data
   - **AWS Systems Manager Parameter Store** - Configuration

## Why This Stack?

This tech stack is highly employable because:

- **Next.js** - Used by companies like Netflix, TikTok, Hulu
- **TypeScript** - Industry standard for type safety
- **Firebase** - Google's platform, used by many startups and enterprises
- **AWS** - Most popular cloud platform, essential for DevOps roles
- **Tailwind CSS** - Modern CSS framework, growing rapidly

## Firebase vs. Traditional Database

### Advantages of Firebase:
- ✅ Real-time updates out of the box
- ✅ Built-in authentication
- ✅ Serverless scaling
- ✅ Easy file storage
- ✅ Free tier for development
- ✅ No database server management

### Considerations:
- ⚠️ NoSQL (different from SQL)
- ⚠️ Vendor lock-in
- ⚠️ Cost can scale with usage
- ⚠️ Complex queries can be challenging

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Next Steps

1. **Set up Firebase project and configure environment variables**
2. **Create authentication pages (sign in, sign up)**
3. **Build tour listing and detail pages**
4. **Implement booking system**
5. **Add payment integration (Stripe)**
6. **Set up AWS deployment**
7. **Add email notifications**
8. **Implement search and filtering**
9. **Add admin dashboard**

## License

MIT
