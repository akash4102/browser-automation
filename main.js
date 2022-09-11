const { cpuUsage } = require("process");
const puppeteer=require("puppeteer");

console.log("before");
const browerOpenpromise=puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]
});
browerOpenpromise
    .then(function(browser){
    let pageArrOpenPromise=browser.pages();
    return pageArrOpenPromise;
    }).then(function(browserPages){
    page=browserPages[0];
    let gotopromise=page.goto("https://www.google.com/");
    return gotopromise;
    }).then(function(){
        //waiting  for the element to appear on the page
        let pageOpenedWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
        return pageOpenedWaitPromise;
    }).then(function(){
        // console.log("Reached google.com");
        // type any element on that page -> selector
        let keysWillBeSendPromise=page.type("input[type='text']","pepcoding");
        return keysWillBeSendPromise;
    }).then(function(){
        //page.keyboard to type special character
        let enterWillBePressed=page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let elementwaitpromise=page.waitForSelector("h3.LC20lb.MBeuO",{visible:true});
        return elementwaitpromise
    }).then(function(){
        let keysWillBeSendPromise=page.click("h3.LC20lb.MBeuO");
        return keysWillBeSendPromise;
    }).catch(function(err){
        console.log(err);
    })
console.log("after");