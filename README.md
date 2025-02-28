# React + TypeScript + Vite

A minimal setup for React with Vite featuring HMR and ESLint.

## Official Plugins
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (Babel)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (SWC)

## ESLint Configuration
For production applications, enable type-aware lint rules by:
1. Configuring `parserOptions` with your tsconfig files
2. Using `tseslint.configs.recommendedTypeChecked` or `strictTypeChecked`
3. Optionally adding React-specific ESLint plugins

See [Vite documentation](https://vitejs.dev/) for more details.