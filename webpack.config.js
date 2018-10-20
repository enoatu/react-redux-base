module.exports = {
  mode: 'development',
 
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'build.js'
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/react', '@babel/env'],
            }
          }
        ]
      },{
          test: /\.css/,
          use: [
              'style-loader',
              {loader: 'css-loader', options: {url: false}},
          ],
      },
    ],
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
}
