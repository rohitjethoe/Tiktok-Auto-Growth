const puppeteer = require('puppeteer');

const Tiktok = {
    url: 'https://www.tiktok.com/login/phone-or-email/email',
    browser: null,
    page: null,
    hashtags: [
        '#tiktoknl',
        '#viraalgaanisookgaan',
        '#goviral',
        '#voorjou'
    ],
    openBrowser: async () => {
        Tiktok.browser = await puppeteer.launch({
            headless: false
        });
        Tiktok.page = await Tiktok.browser.newPage();
        await Tiktok.page.goto(Tiktok.url);
        await Tiktok.page.waitForSelector('input[name=username]');
        await Tiktok.page.waitForTimeout(2000);
    },
    loginUser: async (username, password) => {
        await Tiktok.page.type('input[name=username]', username, { delay: Math.random * 10 })
        await Tiktok.page.type('input[type=password]', password, { delay: Math.random * 10 });
        
        await Tiktok.page.click('.e1521l5b0', { delay : Math.random * 10});

        await Tiktok.page.waitForTimeout(6000);
    },
    uploadVideo: async () => {
        await Tiktok.page.goto('https://www.tiktok.com/upload?lang=nl-NL');
        
        await Tiktok.page.waitForTimeout(1000);

        const frame = await Tiktok.page.$('iframe[src="https://www.tiktok.com/creator#/upload?lang=nl-NL"]')

        const frameSelector = await frame.contentFrame();

        const uploadButton = await frameSelector.$('input[type=file]');
        await uploadButton.uploadFile('./videos/video.mp4');
    }
}

module.exports = Tiktok;