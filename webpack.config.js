const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/scripts//index.js", // Your entry point
  output: {
    filename: "bundle.js", // The output bundle
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Turns CSS into commonjs
        ],
      },
      // Add rules for other file types here if needed
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js"], // Linting for .js files
      context: "src", // Apply linting to the src directory
      // Additional plugin configuration can be added here
    }),
    // You can add more plugins here
  ],
  devServer: {
    contentBase: "./dist", // Where dev server will look for static files
    hot: true, // Enable hot module replacement
  },
};
