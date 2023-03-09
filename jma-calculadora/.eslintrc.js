module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "plugin:@stencil-community/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
