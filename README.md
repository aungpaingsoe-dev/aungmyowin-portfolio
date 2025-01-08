# 🚀 Aung Myo Win Portfolio

Welcome to my personal portfolio repository! This project showcases my work, skills, and projects as a front-end developer, built with **React**, **Vite**, **Shadcn**, **Tailwind CSS**, and pure React components.

## 🛠️ Tech Stack
- **Framework**: React (Vite)
- **UI Components**: Shadcn
- **Styling**: Tailwind CSS
- **JavaScript/TypeScript**: Pure React

## ✨ Features
- Fully responsive and minimal design
- Showcases projects, skills, and experience
- Smooth animations and transitions
- Interactive UI components with Shadcn

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
  git clone https://github.com/aungmyowin/portfolio.git
```

2. **Navigate to the project directory:**
```bash
  cd portfolio
```

3. **Install dependencies:**
```bash
  npm install
  # or
  yarn install
```

4. **Start the development server:**
```bash
  npm run dev
  # or
  yarn dev
```

5. **Open the app in your browser:**
```bash
  http://localhost:5173
```

## 🔧 ESLint Configuration (Optional)
If you are developing a production application, consider expanding the ESLint configuration for better type-checking.

### Enable Type-aware Linting
1. **Update `parserOptions` in ESLint config:**
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

2. **Enable recommended type-checked rules:**
```js
// Replace with stricter rules if necessary
export default tseslint.config({
  ...tseslint.configs.recommendedTypeChecked
})
```

3. **Install `eslint-plugin-react` and configure:**
```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

---

## 📸 Screenshots
> Showcase project screenshots here

---

## 📩 Contact
- **Portfolio**: [aungmyowin.dev](https://aungmyowin.dev)
- **Email**: contact@aungmyowin.dev

---

### 📜 License
This project is licensed under the MIT License.

