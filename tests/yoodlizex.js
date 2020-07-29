module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'See all button-Rec Vehicles': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[1]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=91')
            browser.back()
    },
    'See all buttons-Outdoor Gear': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[2]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=84')
            browser.back()
    },
    'See all button-Electronics': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[3]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=85')
            browser.back()
    },
    'See all buttons-Party & Wedding Equipment': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[4]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=88')
            browser.back()
    },
    'See all buttons-Tools': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[5]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=86')
            browser.back()
    },
    'See all buttons-Clothing': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[6]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=74')
            browser.back()
    },
    'See all buttons-Home & Kitchen': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[7]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=77')
            browser.back()
    },
    'See all buttons-Toys & Games': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[8]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=87')
            browser.back()
    },
    'See all buttons-Lawn & Gardens': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[9]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=93')
            browser.back()
    },
    'See all buttons-Sporting Goods': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[10]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=76')
            browser.back()
    },
    'See all buttons-DVD & Video Games': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[11]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=97')
            browser.back()
    },
    'See all buttons-Venues': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[12]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=92')
            browser.back()
    },
    'See all buttons-Music': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[13]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=96')
            browser.back()
    },
    'See all buttons-Business Equipment': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[14]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=89')
            browser.back()
    },
    'See all buttons-Misc': browser => {
        browser
            .useXpath()
            .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[15]')
            .assert.urlEquals('https://www.yoodlize.com/s?category=95')
            browser.back()
    },
}