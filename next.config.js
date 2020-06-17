const nib = require('nib')
const rupture = require('rupture')
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript(withStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({ flexbox: 'no-2009' }),
        require('postcss-css-variables'),
      ])
    ]
  }
}))