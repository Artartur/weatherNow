import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  setupFiles: ['dotenv/config'],
  coverageProvider: "v8",

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },

  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.scss$",
    "^.+\\.css$",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },

  testEnvironment: "jsdom",
};

export default config;
