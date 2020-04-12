const isDebug = process.env.NODE_ENV == 'development'

module.exports = {
  map: true,
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-banner')({
      banner: `Raster v${process.env.npm_package_version} (rsms.me/raster)`,
      inline: true,
    }),
    ...(isDebug ? [require('cssnano')] : [])
  ]
}