import {defineConfig} from "cypress";

const REQUEST_TIMEOUT = 10000;

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      /* Some beautiful configurations */
    },
    baseUrl: "http://localhost:5173/#",
    requestTimeout: REQUEST_TIMEOUT,
  },
});
