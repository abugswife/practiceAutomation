module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'See all button-Rec Vehicles': browser => {
        browser
            .click('a[href="/s?category=91"]')
            .pause(10000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=91')
            browser.back()
    },
    'See all buttons-Outdoor Gear': browser => {
        browser
            .click('a[href="/s?category=84"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=84')
            browser.back()
    },
    'See all button-Electronics': browser => {
        browser
            .click('a[href="/s?category=85"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=85')
            browser.back()
    },
    'See all buttons-Party & Wedding Equipment': browser => {
        browser
            .click('a[href="/s?category=88"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=88')
            browser.back()
    },
    'See all buttons-Tools': browser => {
        browser
            .click('a[href="/s?category=86"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=86')
            browser.back()
    },
    'See all buttons-Clothing': browser => {
        browser
            .click('a[href="/s?category=74"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=74')
            browser.back()
    },
    'See all buttons-Home & Kitchen': browser => {
        browser
            .click('a[href="/s?category=77"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=77')
            browser.back()
    },
    'See all buttons-Toys & Games': browser => {
        browser
            .click('a[href="/s?category=87"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=87')
            browser.back()
    },
    'See all buttons-Lawn & Gardens': browser => {
        browser
            .click('a[href="/s?category=93"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=93')
            browser.back()
    },
    'See all buttons-Sporting Goods': browser => {
        browser
            .click('a[href="/s?category=76"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=76')
            browser.back()
    },
    'See all buttons-DVD & Video Games': browser => {
        browser
            .click('a[href="/s?category=97"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=97')
            browser.back()
    },
    'See all buttons-Venues': browser => {
        browser
            .click('a[href="/s?category=92"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=92')
            browser.back()
    },
    'See all buttons-Music': browser => {
        browser
            .click('a[href="/s?category=96"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=96')
            browser.back()
    },
    'See all buttons-Business Equipment': browser => {
        browser
            .click('a[href="/s?category=89"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=89')
            browser.back()
    },
    'See all buttons-Misc': browser => {
        browser
            .click('a[href="/s?category=95"]')
            .pause(15000)
            .assert.urlEquals('https://www.yoodlize.com/s?category=95')
            browser.back()
    },
}