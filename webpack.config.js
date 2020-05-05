module.exports = {
  entry: {
    app: './src/app.ts',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
};
