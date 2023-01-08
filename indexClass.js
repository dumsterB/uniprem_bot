import { parse } from "path";
import { readdir } from "fs/promises";
import selenium from "selenium-webdriver";
let { Builder, By, Key, untill } = selenium;
import TelegramBot from "node-telegram-bot-api";
const token = "5879394130:AAGw9NgBEpycnISeNDfUP5VF_sYjf11UUYQ";
let url  = 'https://www.freepik.com/xhr/download-url/12016971'
import {getUrl} from './main.js'
const bot = new TelegramBot(token, { polling: true });

function getIdFromLink(link) {
  let splitted = link.split(".htm");
  let id = splitted[0].split("_")[splitted.length - 1];
  return id;
}

function getAliasFromLink(link) {
  let splitted = link.split(".htm");
  let fileLink = splitted[0].split("_")[0];
  let fileLinkSplit = fileLink.split("/");
  let alias = fileLinkSplit[fileLinkSplit.length - 1];
  return alias;
}

const findByName = async (dir, name) => {
  const matchedFiles = [];
  const files = await readdir(dir);

  for (const file of files) {
    // Method 1:
    const filename = parse(file).name;
    let splittedName = filename.split(" ")[0];
    console.log(splittedName + " " + name);
    if (splittedName === name.trim()) {
      matchedFiles.push(file);
    }
  }
  return matchedFiles;
};

class FreepikDownloader {
  constructor() {
    this.downloadFolder = process.env.USERPROFILE + "/Downloads";
    this.browser = new Builder().forBrowser("chrome").build();
    this.loginLink =
      "https://id.freepikcompany.com/v2/log-in?client_id=freepik&lang=en&_ga=2.22590587.1573958854.1671131491-470343965.1671131491";

    this.email = "zafar.azimov@davrbank.uz";
    this.password = "Ddrake140ckm!";
    return this;
  }
  checkLogin() {
    return new Promise(async (resolve, reject) => {
      let counter = 0;
      let interval = setInterval(async () => {
        let currentLink = await this.browser.executeScript(
          "return window.location.href"
        );
        if (currentLink !== this.loginLink) {
          resolve();
          console.log("Login success");
          clearInterval(interval);
        } else if (counter === 30) {
          reject();
          console.log("Login failed");
          clearInterval(interval);
        }
        counter++;
        console.log("Checking login" + counter);
      }, 1000);
    });
  }

  checkFileInDownloads(aliasFile) {
    return new Promise(async (resolve, reject) => {
      let countInterval = 0;
      let interval = setInterval(async () => {
        let files = await findByName(this.downloadFolder, aliasFile);
        console.log(
          `Files found(${countInterval}):${files} , ${this.downloadFolder} ${aliasFile}`
        );
        if (files.length > 0) {
          let fileName = files[files.length - 1];
          console.log("File found" + fileName);
          resolve(this.downloadFolder + "/" + fileName);
          clearInterval(interval);
        } else if (countInterval > 20) {
          reject("File not found");
          clearInterval(interval);
        }
        countInterval++;
      }, 2000);
    });
  }
  async logIn() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.browser.get(this.loginLink);
        await this.browser
          .findElement(
            By.css(
              ".main-button.button.button--outline.button--with-icon:nth-child(3)"
            )
          )
          .click();
        let email_field = await this.browser.findElement(By.name("email"));
        let password_field = await this.browser.findElement(
          By.name("password")
        );
        let checkbox_field = await this.browser.findElement(
          By.name("keep-signed")
        );
        await checkbox_field.click();
        await email_field.sendKeys(this.email);
        await password_field.sendKeys(this.password);
        let submit_button = await this.browser.findElement(
          By.css('.main-button.button[type="submit"]')
        );
        await submit_button.click();
        this.checkLogin().then(resolve).catch(reject);
      } catch (error) {
        reject(error);
        console.log(error);
      }
    });
  }

  downloadFile(link) {
    return new Promise(async (resolve, reject) => {
      let id = getIdFromLink(link);
      console.log('work?')
      this.browser
        .get(`https://www.freepik.com/xhr/download-url/${id}`)
        .then((res) => {
          console.log(res,'res')
          let aliasFile = getAliasFromLink(link);
          this.checkFileInDownloads(aliasFile).then(resolve).catch(reject);
        });
    });
  }
  getOrDownloadFile(link) {
    return new Promise(async (resolve, reject) => {
      try {
        let aliasFile = getAliasFromLink(link);
        console.log("Alias file:" + aliasFile);
        this.checkFileInDownloads(aliasFile)
          .then(resolve)
          .catch(() => {
            this.downloadFile(link).then(resolve).catch(reject);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
  getLinkToDownload(link){
    return new Promise((resolve,reject)=>{
      const id = getIdFromLink(link)
      getUrl(id).then((res)=>{
      resolve(res)
      })
    })
  }
}

function start(params) {
  return new Promise(async (resolve, reject) => {
    try {
      const freepik = new FreepikDownloader();
      freepik
        .logIn()
        .then(() => {
          resolve(freepik);
        })
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}
const app = await start();

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  let replyText = msg.text;
  if (replyText != "/start") {
    app
      .getLinkToDownload(replyText)
      .then((urlLink) => {
        bot.sendMessage(chatId, urlLink).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        bot.sendMessage(chatId, `Error:${error}`);
        console.log(error);
      });
    // bot.sendMessage(chatId, `hello ${filepath}`);
    // let stream = fs.createReadStream(filepath);
    // bot.sendDocument(chatId, filepath).catch((error) => {
    //   console.log(error);
    // });
  } else {
    bot.sendMessage(chatId, `Добро пожаловать ${msg.from.username} `);
  }
});

process.on("warning", (warning) => {
  console.log(warning.stack);
});
