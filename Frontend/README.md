# X Copy - A copy of the social network X
This repository was created to improve my frontend development skills with TypeScript and React. I used a template from Vite with SWC to set up the project. The main goal is to replicate the visual aspects of the social network X. While this is currently just a frontend clone, I plan to update it in the future by integrating persistence and a backend, making it a fully functional copy as close as possible to the original. This project serves as an educational tool for me to learn and apply modern web development techniques.

# Dependencies
## MUI & MUI - Icons

MUI (Material UI) is the primary dependency of this project, and I’m using it to build all of the React components. I’ve been learning how to use this powerful tool as I code, referring to [the official documentacion:](https://mui.com/material-ui/getting-started/). Additionally, MUI offers another package called MUI - Icons, which provides an extensive library of icons available as React components, making it extremely useful for quickly adding icons to the application.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Contributing
Feel free to open issues and submit pull requests if you find any bugs or want to suggest improvements. I welcome contributions to help improve the project!


