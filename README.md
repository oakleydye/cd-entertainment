# CD Entertainment - Next.js Migration

This is the migrated version of the DJ-UI React application, now built with Next.js 15, Prisma, and shadcn/ui.

## Migration Complete ✅

### What was migrated:
- **React to Next.js 15**: Full migration from Create React App to Next.js with App Router
- **MUI to shadcn/ui**: Replaced Material-UI with modern shadcn/ui components
- **C# Backend to Next.js API Routes**: All backend functionality moved to `/api` routes
- **Database**: Integrated Prisma ORM for database operations
- **State Management**: Replaced React Context with Zustand
- **Styling**: Migrated to Tailwind CSS with shadcn/ui

### Key Features:
- 🎵 Song request system with Genius API integration
- 📝 Contact form with email notifications
- 🎨 Modern, responsive design
- 📱 Mobile-friendly navigation
- 🗄️ PostgreSQL database with Prisma
- 🔧 TypeScript throughout
- 🎭 Framer Motion animations
- 🌐 Server-side rendering

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Genius API token (optional, for song search)

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database URL and API keys.

3. **Set up the database**:
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Or run migrations (after setting up your database)
   npm run db:migrate
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Setup

### PostgreSQL Schema
The database schema includes tables for:
- About information
- Event types
- FAQs
- Price packages and features
- Service summaries
- Counters/statistics
- Song requests
- Contact form submissions
- App settings

### Prisma Commands
```bash
# Generate Prisma client
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and run migrations
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio
```

## API Routes

All backend functionality is now handled by Next.js API routes:

- `GET /api/about` - Get about information
- `PUT /api/about` - Update about information
- `GET /api/event-types` - Get event types
- `GET /api/faq` - Get FAQs
- `GET /api/packages` - Get price packages
- `GET /api/services` - Get service summaries
- `GET /api/counters` - Get statistics counters
- `POST /api/contact` - Submit contact form
- `GET /api/song-requests` - Get song requests
- `POST /api/song-requests` - Submit song request
- `DELETE /api/song-requests` - Archive all requests
- `DELETE /api/song-requests/[id]` - Archive specific request
- `GET /api/song-requests/setting` - Get request acceptance status
- `PUT /api/song-requests/setting` - Toggle request acceptance
- `GET /api/search` - Search songs via Genius API

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes (replaced C# backend)
│   ├── request/        # Song request page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── common/        # Shared components
│   └── homepage/      # Homepage sections
├── lib/               # Utilities
│   ├── prisma.ts      # Prisma client
│   ├── store.ts       # Zustand state management
│   └── utils.ts       # Helper functions
└── types/             # TypeScript types
```

## Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Modern component library
- **Framer Motion** - Animations
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Database
- **Nodemailer** - Email sending
- **Genius API** - Song search

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Deployment

### Environment Variables
Make sure to set all required environment variables in your deployment platform:
- `DATABASE_URL`
- `GENIUS_ACCESS_TOKEN` (optional)
- Email configuration (optional)

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm start
```

## Migration Notes

### From the Original React App:
1. **Component Structure**: Maintained similar component hierarchy
2. **State Management**: Replaced React Context with Zustand for better performance
3. **Styling**: Migrated from MUI to shadcn/ui + Tailwind for modern styling
4. **Backend**: All C# controllers converted to Next.js API routes
5. **Database**: Prisma schema matches original database structure
6. **Features**: All original features preserved and enhanced

### Benefits of Migration:
- ✅ Better performance with Next.js SSR/SSG
- ✅ Modern component library (shadcn/ui)
- ✅ Simplified deployment (single Next.js app)
- ✅ Better DX with TypeScript throughout
- ✅ Modern build tools and optimizations
- ✅ API routes replace separate backend service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
