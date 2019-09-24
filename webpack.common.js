const path = require("path");

module.exports = {
  "entry": "./src/index.js",
  "output": {
    "filename": "main.js",
    "path": path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 2) Inject styles into DOM.
          "css-loader" // 1) Turns css into commonjs.
        ]
      }
    ]
  }
}