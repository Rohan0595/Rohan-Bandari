# Rohan Bandari Portfolio

A modern, responsive portfolio website built with Vite, React, and TypeScript, featuring a beautiful design with smooth animations and excellent performance.

## Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with TypeScript for type safety
- 📱 Fully responsive design
- 🎨 Modern UI with custom styling and glassmorphism effects
- 🚀 Fast loading times and optimized performance
- 🎯 SEO optimized
- 🔧 ESLint configured for code quality

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS with custom properties and glassmorphism
- **Fonts**: Asgard Trial, Montserrat, Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd rohan-bandari-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects section
│   ├── Testimonials.tsx # Testimonials section
│   └── Contact.tsx     # Contact section
├── App.tsx             # Main App component
├── main.tsx            # Entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
\`\`\`

## Customization

### Personal Information

Update the following components to customize your portfolio:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change the name from "Rohan Bandari" to your name
   - Update the title and subtitle

2. **About Section** (`src/components/About.tsx`):
   - Replace the placeholder text with your actual bio
   - Update skills and statistics

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace project data with your actual projects
   - Update project names, descriptions, and technologies

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address and contact information
   - Add your social media links
   - Update copyright year

### Styling

The design features:
- Dark theme with gradient backgrounds
- Glassmorphism effects with backdrop blur
- Custom fonts (Asgard Trial, Montserrat, Poppins)
- Responsive breakpoints for mobile and tablet
- Smooth animations and transitions
- CSS custom properties for easy theming

## Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist/` directory.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Performance

This portfolio is optimized for performance with:
- Vite's fast build system
- Tree-shaking for smaller bundle sizes
- Optimized images and assets
- Minimal JavaScript for fast loading
- CSS-only animations where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!
