const { defineConfig, devices } = require("@playwright/test");
const baseURL = process.env.BASE_URL;
const headless = process.env.HEADLESS !== 'false'


module.exports = defineConfig({
  testDir: "./e2etests",
  reporter: "html",
  use: {
    baseURL: "https://staging.ded1.co",
    trace: "on-first-retry",
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1600, height: 1200 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
