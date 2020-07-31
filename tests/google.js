var google = {}
module.exports = {
    beforeEach: browser => {
        google = browser.page.googlePage()
        google
            .navigate()
    },
    after: browser => {
        google
            .end()
    },
    'Rue': browser => {
        google
            .setValue('@searchBar', ['@theedoodette', browser.Keys.ENTER])
            .verify.containsText('@results', 'theedoodette')
            .pause(10000)

    }
}