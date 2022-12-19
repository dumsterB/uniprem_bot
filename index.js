const axios = require('axios')
const driver = require('selenium-webdriver')
const {Builder,By,Key,untill} = require('selenium-webdriver');
const TelegramBot = require('node-telegram-bot-api');
const token = '5879394130:AAGw9NgBEpycnISeNDfUP5VF_sYjf11UUYQ'
const bot = new TelegramBot(token, {polling: true});


// let link = '';
// (async function linkHandler(value){
//     let driver = await new Builder().forBrowser('chrome').build();
//     if(value) {
//         let link_arr = []
//         let splitted = value.split('.htm')
//         link = splitted[0].split('_')[splitted.length - 1]
//         console.log(link)
//         try {
//             await driver.get('https://id.freepikcompany.com/v2/log-in?client_id=freepik&lang=en&_ga=2.22590587.1573958854.1671131491-470343965.1671131491');
//             await driver.findElement(By.css('.main-button.button.button--outline.button--with-icon:nth-child(3)')).click();
//             let email_field = await driver.findElement(By.name('email'));
//             let password_field = await driver.findElement(By.name('password'))
//             let checkbox_field = await driver.findElement(By.name('keep-signed'))
//             await checkbox_field.click()
//             await email_field.sendKeys('zafar.azimov@davrbank.uz')
//             await password_field.sendKeys('Ddrake140ckm!')
//             let submit_button = await driver.findElement(By.css('.main-button.button[type="submit"]'))
//             await submit_button.click()
//             setTimeout(()=>{
//                 const img =  driver.get(`https://www.freepik.com/download-file/${link}`);
//                 console.log(img)
//             },10000)
//
//
//
//             setTimeout(()=>{
//                 driver.quit();
//             },120000)
//         }catch (e){
//             console.log(e)
//         }
//     }
// })('https://www.freepik.com/premium-photo/front-view-generic-brandless-moder-car_4677074.htm#query=cars&position=18&from_view=search&track=sph')

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let replyText = msg.text
    if (replyText != "/start") {
        bot.sendMessage(chatId, `hello ${replyText}`)
    }else{
        bot.sendMessage(chatId, `Добро пожаловать ${msg.from.username} `)
    }
});
