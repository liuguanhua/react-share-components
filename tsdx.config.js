const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const copy = require('rollup-plugin-copy');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images(),
      copy({
        targets: [
          {
            src: ['src/fonts/*'],
            dest: 'dist/fonts',
          },
        ],
      }),
      postcss({
        minimize: true,
        plugins: [autoprefixer()],
        extract: 'react-share-components.css',
      }),
      ...config.plugins, //rollup插件需要先于tsdx的插件
    ];
    return config; // always return a config.
  },
};
