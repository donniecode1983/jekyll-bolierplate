const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    entry: './src/js/custom.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'custom.js',
    libraryTarget: 'var',
    library: 'custom'
  }
}