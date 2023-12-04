# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
![Super-Test-Form-1](https://github.com/manojkiranti/super-test-form/assets/10720424/0a2bcb35-ba5f-44cf-a7f8-4ac1f83a0426)
![Super-Test-Form-2](https://github.com/manojkiranti/super-test-form/assets/10720424/2df16c41-4ee8-454b-ba96-33033ea4f25c)
![Super-Test-Form-3](https://github.com/manojkiranti/super-test-form/assets/10720424/d038af09-5956-4573-88c5-5f76acdf59a1)
![Super-Test-Form-4](https://github.com/manojkiranti/super-test-form/assets/10720424/0037aea9-0e91-4a35-b960-99e9791e8b7d)
![Super-Test-Form-validation](https://github.com/manojkiranti/super-test-form/assets/10720424/4d0f5156-3988-46d5-8962-4783922e66dd)

![Super-Test-Form-mobile](https://github.com/manojkiranti/super-test-form/assets/10720424/59d2f1f0-2c4b-4b5f-9972-8ab6fc8c5743)
