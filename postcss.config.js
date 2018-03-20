module.exports = {
  plugins: [
    require('postcss-import')({/* ...options */}),
    require('postcss-custom-media')({/* ...options */}),
    require('postcss-custom-properties')({
      warnings: true
    }),
    require('postcss-nested')({/* ...options */})
  ]
}
