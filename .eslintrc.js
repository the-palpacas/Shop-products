module.exports = {
    "extends": "airbnb",
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