const path = require('path')
const rootPath = path.resolve(__dirname, '../')

// -- to run webpack in full control mode
module.exports = ({ config }) => {
  // -- tells webpack how to resolve various dependencies
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': rootPath,
    '~~': rootPath,
    '@': rootPath,
    // -- when using stylus, this is necessary in order to help storybook resolve any stylus files that your component might import
    assets: `${rootPath}/assets`,
    static: `${rootPath}/static`
  }
  config.resolve.extensions.push('.vue', '.css', '.less', '.scss', '.sass', '.html', '.md')
  config.module.rules.push({ test: /\.less$/, loaders: [ 'style-loader', 'css-loader', 'less-loader' ] });
  config.module.rules.push({ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' });
  // -- tells storybook how to work with pug
  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  })

  // -- tells storybook how to work with various vue styles
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true
          }
        }
      }
    ],
    include: rootPath
  })
  return config
}
