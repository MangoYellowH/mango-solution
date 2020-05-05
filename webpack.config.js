const path = require("path");

const serverConfig = {
  entry: {
    app: "./src/app.ts",
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};

// const clientConfig = {
//   entry: {
//     app: './src/app.ts',
//   },
//   target: 'node',
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

module.exports = [
  serverConfig, // clientConfig
];
