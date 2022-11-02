const path = require('path');

module.exports = {
    entry: './webpack/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    entry: './webpack/js/custom.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'custom.js',
    libraryTarget: 'var',
    library: 'custom'
  }
}