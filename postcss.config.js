module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-css-variables')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
}
