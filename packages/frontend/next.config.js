module.exports = (phase, { defaultConfig }) => {
  console.log(defaultConfig);
  return {
    target: "serverless",
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      return config;
    }
  };
};
