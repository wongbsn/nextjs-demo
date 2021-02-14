const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "components"),
      "@views": path.resolve(__dirname, "views"),
    };

    return config;
  },
  images: {
    deviceSizes: [375, 500, 640, 768, 1200, 1920, 2560, 3440, 3840],
  },
};
