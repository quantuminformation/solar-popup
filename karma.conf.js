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
      include: ["src/**/*.ts"],
      tsconfig: "./tsconfig.json"
    },

    reporters: ["progress", "karma-typescript"],

    browsers: ["Chrome"],

    singleRun: false
  });
};
