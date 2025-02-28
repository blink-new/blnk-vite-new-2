# React + TypeScript + Vite Project

A modern, feature-rich React application built with TypeScript and Vite, offering exceptional developer experience and optimized performance.

## 🚀 Features

- **React 19** - Latest React version with improved rendering and hooks
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code quality and consistency enforcement
- **React Three Fiber** - 3D graphics capabilities with Three.js
- **Framer Motion** - Advanced animations and transitions
- **Recharts** - Responsive charting library
- **DND Kit** - Drag and drop functionality
- **Radix UI** - Accessible UI components
- **Zod** - Runtime type validation

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd <project-directory>

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📂 Project Structure

```
/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── lib/            # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.cjs # Tailwind CSS configuration
└── postcss.config.cjs  # PostCSS configuration
```

## 🧩 Key Dependencies

### Core
- **React** (v19.0.0) - UI library
- **React DOM** (v19.0.0) - React renderer for the DOM
- **TypeScript** (v5.7.2) - Typed JavaScript

### UI and Styling
- **Tailwind CSS** (v3.3.5) - Utility-first CSS framework
- **Framer Motion** (v12.4.7) - Animation library
- **Lucide React** (v0.476.0) - Icon library
- **Radix UI** - Headless UI components
  - Dialog, Dropdown Menu, Tabs

### Functionality
- **React Hook Form** (v7.54.2) - Form handling
- **React Hot Toast** (v2.5.2) - Toast notifications
- **React Responsive** (v10.0.0) - Responsive design utilities
- **Recharts** (v2.15.1) - Charting library
- **DND Kit** (v6.3.1) - Drag and drop functionality
- **Zod** (v3.24.2) - Schema validation

### 3D Graphics
- **React Three Fiber** (v9.0.4) - React renderer for Three.js
- **Drei** (v10.0.3) - Useful helpers for React Three Fiber

## 🔧 Configuration

### ESLint

For production applications, enable type-aware lint rules by:

1. Configure the top-level `parserOptions` property:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
3. Optionally add `...tseslint.configs.stylisticTypeChecked`

### TypeScript

The project uses a multi-tsconfig setup:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js specific configuration

### Vite

Vite is configured with the React plugin for optimal development experience. See `vite.config.ts` for details.

## 🌐 Browser Support

This project supports all modern browsers, including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.