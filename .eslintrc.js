module.exports = {
    "extends": ["airbnb", "./node_modules/eslint-config-hackreactor/index.js"],
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "rules": {
      "no-unused-expressions": ["error", {"allowTernary": true}]
    },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js",".jsx"]
        }
      }
    }
};