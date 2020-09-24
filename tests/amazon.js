var bezosSucks = {}
module.exports = {
    beforeEach: browser => {
        bezosSucks = browser.page.amazonPage()
        bezosSucks
            .navigate()
    },
    after: browser => {
        bezosSucks
            .end()
    },
    'Amazon Search': browser => {
        var search = 'Lego Star Wars'
        bezosSucks
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', search)
            .click('@searchButton')
            .verify.containsText('@results', 'Lego Star Wars')
    }
}

//Testing Captcha Chance

module.exports = {
    'Log into system - create order': function (browser) {
      var currentIteration = 0,
          iterationCount = 10;
  
      function runTest() {
        browser
          .url('https://www.apartmentlist.com/')
          .click('a[href="/users/login"]')
          .click('input[name="email"]')
          .setValue('input[name="email"]', 'davisdbrianna@gmail.com')
          .click('#password')
          .setValue('#password', 'bdenisem0')
          .click('#login-button')
          browser.perform(function() {
            if (++currentIteration < iterationCount) {
              return runTest();
            }
  
            browser.end(); // After passing 30 iterations end the session
          });
      }
  
      runTest();
    }
  };