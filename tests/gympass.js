module.exports = {
    beforeEach: browser => {
        browser.url('gympass.com/us')
    },
    aftee: browser => {
        browser.end()
    },
    //Testing features of Gympass.com
}