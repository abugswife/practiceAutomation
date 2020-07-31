var starWars = {}
module.exports = {
    beforeEach: browser => {
        starWars = browser.page.amazonPage()
        starWars
            .navigate()
    },
    after: browser => {
        starWars
            .end()
    },
    'Amazon Search': browser => {
        var search = 'Lego Star Wars'
        starWars
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', search)
            .click('@searchButton')
            .verify.containsText('@results', 'Lego Star Wars')
    }
}
