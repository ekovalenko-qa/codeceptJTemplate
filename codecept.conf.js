const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    currencyPage: './pages/currency.js',
    depositsPage: './pages/deposits.js',
    mainPage: './pages/main.js',
    myPage: './pages/my.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJSTemplate',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
