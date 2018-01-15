module.exports = {
  context: __dirname + '/app',
  entry: ['./entry', './moving'],
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  }
};