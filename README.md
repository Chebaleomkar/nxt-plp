# NxtWave Product Listing Platform

A modern e-commerce product listing platform built with Next.js, featuring advanced filtering, sorting, and authentication capabilities.

## SEO Performance

Our application achieves excellent SEO performance with a score of 92/100 as shown in the Lighthouse audit:

![SEO Score](/public/images/seo%20score.png)

## Features

- 🛍️ Product listing with dynamic filtering
- 🔍 Advanced search and sort functionality
- 🔐 User authentication with MongoDB
- 📱 Responsive design with mobile-first approach
- ⚡ Fast loading times and optimized performance
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- Next.js 13+ with App Router
- MongoDB for database
- Tailwind CSS for styling
- Zustand for state management
- JWT for authentication

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
MONGODB_URI=your_mongodb_uri
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

- Login and signup functionality
- Secure password hashing
- JWT token-based authentication

## Product Features

- Sort products by:
  - Price (Low to High)
  - Price (High to Low)
  - Recommended

- Filter products by:
  - Categories
  - Price range
  - Ratings

## Mobile Responsiveness

- Adaptive layout for all screen sizes
- Mobile-optimized filters and sorting
- Accordion-style navigation on mobile

## Performance Optimization

- Image optimization
- Lazy loading
- Server-side rendering
- Efficient state management

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

MIT License

Live Link: [Visit the App](https://nxt-plp.vercel.app/)

### Demo Credentials
- **Email:** user@nxtWave.com
- **Password:** user@123

## Features

- 🛍️ Product listing with filtering and sorting
- 🔐 User authentication (Login/Signup)
- 💳 Price visibility control based on authentication
- 📱 Fully responsive design
- 🎨 Modern UI 
- 🔍 Search functionality
- 🛒 Shopping cart functionality
- ❤️ Wishlist feature

## Project Structure

```
nxt-plp/
├── app/                    # App router pages
│   ├── auth/              # Authentication routes
│   ├── login/             # Login page
│   └── signup/            # Signup page
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Features in Detail

### Authentication

- JWT-based authentication
- Protected routes
- User session management
- Secure password handling

### Product Listing

- Grid layout for products
- Sorting options
- Price visibility based on auth status
- Responsive design for all devices

### UI/UX

- Modern and clean interface
- Responsive navigation
- Loading states
- Error handling
- Mobile-first approach
