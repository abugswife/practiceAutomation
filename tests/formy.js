module.exports = {
    beforeEach: browser => {
        browser.url('https://formy-project.herokuapp.com/')
    },
    after: browser => {
        browser.end()
    },
    'Testing Form': browser => {
        browser
            .useXpath()
            .click('//*[@id="navbarNavDropdown"]/ul/li[1]/a')
            .useCss()
            .setValue('#first-name', 'Jane')
            .setValue('#last-name', 'Doe')
            .setValue('#job-title', 'CEO')
            .click('#radio-button-3')
            .click('#checkbox-2')
            .click('#select-menu')
            .click('#select-menu option[value="3"]')
            .setValue('#datepicker', '10/19/2020')
            .useXpath()
            .click('//a[@role="button"]')
            .pause(3000)
    }
}