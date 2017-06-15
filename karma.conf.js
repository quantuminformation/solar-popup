module.exports = (config) => {

  config.set({

    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "src/**/*.ts" }
    ],

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      include: ["src/**/*.ts"]
    },

    reporters: ["progress", "karma-typescript"],

    browsers: ["Chrome"],

    singleRun: false,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    }
  });
};
