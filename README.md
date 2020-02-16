# eslint-config

This is a global style preference that enforces consistent formatting. If used with `vscode`

```bash
npm run lint
npm run lint -- --fix
```

# Project Configuration

1. The following command will perform an npm install and create all the configuration files you need

   ```bash
   npx @jsonxr/eslint-config
   ```

2. Add the following to your `package.json` file

   ```javascript
   {
     "scripts": {
       "lint": "eslint 'src/**/*.*' index.js"
     }
   }
   ```

# Files

### `.eslintrc.js`

```javascript
module.exports = { extends: '@jsonxr' };
```

### `.prettierrc.js`

```javascript
module.exports = '@jsonxr/eslint-config/prettier';
```

# vscode

1. Install prettier plugin - To install the prettier plugin, in quick open (`cmd+p`), run the following command:

   ```
   ext install esbenp.prettier-vscode
   ```

2. Configure project - Add .vscode/settings.json to project to ensure that every cmd+s get's prettiefied. The `npx` command creates this for you so you just need to check it in. If you already have project settings, need to add these.

   `.vscode/settings.json`

   ```javascript
   {
     "prettier.configPath": ".prettierrc.js",
     "editor.formatOnSave": true
   }
   ```
