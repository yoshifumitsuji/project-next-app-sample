const path = require('path')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/components', '../src/components/**/*'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')]
    config.resolve.alias['next/image'] = require.resolve('./NextImage.js')
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@use "env.${process.env.NODE_ENV}.scss" as environment;`,
            sassOptions: {
              includePaths: [path.join(__dirname, '../src/styles')],
            },
          },
        },
      ],
    })
    return config
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
