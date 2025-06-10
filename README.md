# Kamlesh Porwal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a sophisticated dark theme with smooth animations and mobile-first design.

## 🚀 Features

- **Modern Dark Theme**: Consistent dark background (#0f1419) with grey accents
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Navigation**: Fixed navigation with active section highlighting
- **Professional Sections**:
  - Hero section with typewriter effect
  - About Me with personal introduction
  - Featured Projects with live demos
  - Technical Skills with proficiency levels
  - Professional Experience timeline
  - Education with certifications
  - Contact form with social links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📱 Mobile Optimization

- Fixed navigation with solid background for better visibility
- Properly positioned GitHub button that doesn't overflow
- Touch-friendly interface elements
- Optimized typography and spacing for mobile screens
- Smooth mobile menu animations

## 🎨 Design System

- **Colors**: Dark theme with grey scale palette
- **Typography**: Space Grotesk for headings, JetBrains Mono for code
- **Animations**: Slide-in, fade-in, float, and scale effects
- **Layout**: Clean, minimal design with focus on content

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamleshporwal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn/ui components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── Education.tsx    # Education & certifications
│   ├── Experience.tsx   # Work experience
│   ├── Footer.tsx       # Footer with social links
│   ├── Hero.tsx         # Landing section
│   ├── Navigation.tsx   # Fixed navigation
│   ├── ProjectCard.tsx  # Individual project cards
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Technical skills
├── contexts/
│   └── AppContext.tsx   # Global state management
├── hooks/
│   └── use-mobile.tsx   # Mobile detection hook
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
└── styles/
    └── index.css        # Global styles
```

## 🎯 Key Components

### Navigation
- Fixed position with backdrop blur
- Active section highlighting
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Animated typewriter effect
- Floating background elements
- Call-to-action buttons
- Professional introduction

### Projects
- Interactive project cards
- Live demo and GitHub links
- Technology stack display
- Responsive grid layout

### Skills
- Categorized skill groups
- Visual proficiency indicators
- Animated reveal on scroll
- Technology icons

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.ts` and `src/index.css`:

```css
:root {
  --background: #0f1419;
  --foreground: #f1f5f9;
  --accent: #374151;
}
```

### Content
Update personal information in respective component files:
- `Hero.tsx` - Name and title
- `About.tsx` - Personal description
- `Projects.tsx` - Project details
- `Experience.tsx` - Work history
- `Education.tsx` - Educational background

### Animations
Custom animations are defined in `src/index.css`. Modify or add new animations as needed.

## 📊 Performance

- Optimized images and assets
- Lazy loading for components
- Minimal bundle size
- Fast loading times
- SEO-friendly structure

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: kamleshporwal@example.com
- **LinkedIn**: [linkedin.com/in/kamleshporwal](https://linkedin.com/in/kamleshporwal)
- **GitHub**: [github.com/kamleshporwal](https://github.com/kamleshporwal)
- **Portfolio**: [kamleshporwal.dev](https://kamleshporwal.dev)

---

**Built with ❤️ by Kamlesh Porwal**