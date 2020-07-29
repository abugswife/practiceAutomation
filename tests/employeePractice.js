
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Edit name on card': browser => {
        browser
        .pause()
        .click('li[name="employee1"]')
        .pause(5000)
        .click('input[name="nameEntry"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', ['Bernie Ortiz'])
        .pause(5000)
        .click('#saveBtn')
        .pause(10000)
        .verify.containsText('input[name="nameEntry"]', "Bernie Ortiz")
        .pause(5000)


    },
    'Edit phone on card': browser => {
        browser
        .click('li[name="employee1"]')
        .pause(5000)
        .click('input[name="phoneEntry"]')
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', ['5108259001', browser.Keys.ENTER])
        .pause(5000)
        .click('#saveBtn')
        .pause(5000)
        // .assert.containsText('input[name="phoneEntry"]', "5108259001")

    },
    'Edit title on card': browser => {
        browser
        .click('li[name="employee1"]')
        .pause(5000)
        .click('input[name="titleEntry"]')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', ['CFO', browser.Keys.ENTER])
        .pause(5000)
        .click('#saveBtn')
        .pause(5000)
        // .assert.containsText('input[name="titleEntry"]', "CFO")


    }
}