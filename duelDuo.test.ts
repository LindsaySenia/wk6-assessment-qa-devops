
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('Draw button displays choices', async () => {
    let button = await driver.findElement(By.id('draw'))
    let choices = await driver.findElement(By.id('choices'))

    await button.click()

    await driver.sleep(2000)
})

test('Add to Duo button adds robot to player', async () => {
    let button = await driver.findElement(By.id('draw'))
    let choices = await driver.findElement(By.id('choices'))

    await button.click()

    await driver.sleep(2000)

    let duoBtn = await driver.findElement(By.className('bot-btn'))

    await duoBtn.click()

    await driver.sleep(5000)

})

// click draw button displays the div with id = "choices"

//click "add to duo" displays the div with id = "player-id"

//makes sure "removed from duo" bot goes back to "choices"