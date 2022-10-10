const puppeteer = require('puppeteer')

describe('Mi primer test con puppeteer', () => {

    it ('Debe entrar a mi Git', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: false,
            defaultViewport: null,
        })

        const page = await browser.newPage()
        await page.goto('https://github.com/faobs92')
        await page.waitForSelector('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(2)')
        await page.click('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a.UnderlineNav-item.js-responsive-underlinenav-item.selected', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.click('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(5)', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(3)', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(4)', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('body > div.application-main > main > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(2)', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.click('#user-repositories-list > ul > li:nth-child(4) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('#user-repositories-list > ul > li:nth-child(3) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('#user-repositories-list > ul > li:nth-child(2) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await page.click('#user-repositories-list > ul > li:nth-child(1) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a', {button: 'left'})
        await page.waitForTimeout(5000)
        await page.goBack()
        await page.waitForTimeout(5000)
        await browser.close()
    }, 150000)

})