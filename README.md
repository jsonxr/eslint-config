# eslint-config

This is a global style preference that enforces consistent formatting.

# Project Configuration

The following command will perform an npm install and create all the configuration files you need

    npx @jsonxr/eslint-config

# Files

## 1. `.eslintrc.js`

    module.exports = { "extends": "@jsonxr" }

## 2. `.prettierrc.js`

    module.exports = "@jsonxr/eslint-config/prettier"

## 3. `<project>/.vscode/settings.json`

Configures vscode to use prettier formatter on every save

    {
      "prettier.configPath": ".prettierrc.js",
      "editor.formatOnSave": true
    }
