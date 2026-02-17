module.exports = {
  module: {
    rules: [
      {
        test: /gojs[/\\].*\.js$/,
        use: 'null-loader'
      }
    ]
  }
};
