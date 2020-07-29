
module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Rue': browser => {
        browser
            .setValue('input[name="q"]', ['@theedoodette', browser.Keys.ENTER])
            .assert.containsText('#res', 'theedoodette')
            .pause(10000)

    }
}