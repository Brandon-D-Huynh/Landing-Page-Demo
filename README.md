# AudioMax - Premium Headphones Landing Page

A modern, responsive landing page for AudioMax, a premium audio equipment company. Built with Next.js 15, TypeScript, and Tailwind CSS featuring smooth animations and a professional design.

## Live Demo

[View Live Demo](#) <!-- Add your deployed URL here -->

## Features

- **Modern Design**: Clean, professional layout with premium feel
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme switching with next-themes
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Elements**: Hover effects and smooth transitions
- **Customer Reviews**: Carousel slider for testimonials
- **Contact Form**: Professional contact section
- **Type Safety**: Built with TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: AOS (Animate On Scroll)
- **Icons**: React Icons
- **Carousel**: React Multi Carousel
- **Theme**: Next Themes for dark/light mode

##  Customization

### Colors
The project uses a pink and green color scheme. To customize:
- Primary: `pink-600`, `pink-700`, `pink-800`
- Secondary: `green-500`, `green-600`
- Update these in the Tailwind classes throughout the components

### Content
- **Brand Name**: Change "AudioMax" in Nav.tsx and Footer.tsx
- **Reviews**: Update the `reviewData` array in ReviewSlider.tsx
- **Features**: Modify the `featureData` array in Features.tsx
- **Contact Info**: Update phone, email, and address in Footer.tsx

### Images
Replace images in the `public/images/` directory:
- `hero.png` - Hero section image
- `h1.png` - About section image
- `c1.png`, `c2.png`, `c3.png` - Customer avatars

## 📱 Responsive Design

- **Mobile**: < 464px
- **Tablet**: 464px - 1024px  
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design approach.

## Theme Support

The application supports both light and dark themes using next-themes:
- Automatic system theme detection
- Manual theme switching
- Persistent theme preference

## Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npx vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'out' folder to Netlify
```

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel) - Carousel component
