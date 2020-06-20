module.exports = {
  css: {
    sourceMap: true,
  },
  transpileDependencies: ['x5-gmaps'],
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};
