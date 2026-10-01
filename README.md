# Alan Yuan | Professional Research & Engineering Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This site is specifically tailored for a Computer Science student and researcher, featuring a clean "Light Purple & White" aesthetic with a focus on academic publications and technical project experience.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Research Focused**: Dedicated sections for IEEE/Springer publications and academic research assistant roles.
- **Project Showcases**: Modern cards detailing tech stacks and key performance metrics (A* optimization, AI integration).
- **Light/Purple Theme**: Professional, high-contrast UI with smooth glassmorphism effects.
- **Smooth Navigation**: Single-page application (SPA) feel with anchor-link smooth scrolling.
- **Contact Integration**: Clean call-to-action cards for LinkedIn, GitHub, and Email.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository or download the source code:
   ```bash
   git clone [your-repo-url]
   cd alan-yuan-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` to view the site.

## 🏗️ Project Structure

```text
├── components/         # Reusable UI components (Navbar, Section, etc.)
├── App.tsx             # Main layout and section orchestration
├── constants.ts        # CENTRAL DATA FILE - Update your resume info here
├── types.ts            # TypeScript interfaces for data safety
├── index.html          # HTML entry point with font configurations
└── index.tsx           # React entry point
```

## ⚙️ Customization

To update the website with your latest achievements, you only need to modify **one file**:

1. Open `constants.ts`.
2. Update the `PERSONAL_INFO` object (Email, Education, etc.).
3. Add or edit entries in `EXPERIENCES`, `PROJECTS`, and `PUBLICATIONS` arrays.
4. The UI will automatically update to reflect your changes.

## 📦 Deployment

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` folder, which can be hosted on platforms like Vercel, Netlify, or GitHub Pages.

---
Built by Alan Yuan — *Excellence in every line of code.*
