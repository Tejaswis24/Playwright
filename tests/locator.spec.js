//const (test, expect) = require("@playwright/test")
//or 

import {test, expect} from '@playwright/test'

test('locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    //Click on login button
    await page.locator('id=login2').click();
    //or await page.click('id=login2')

    //provider user name
    await page.fill("input[id='loginusername']","tejuplay")
    //or await page.locator("input[@id='loginusername']").fill('value");

    //provide password
        await page.fill("input[id='loginpassword']","Test@123")
            //or await page.locator("input[@id='loginpassword']").fill('value");


    //Click on login
        //await page.click("button[onclick='logIn()']")
        await page.locator("button[onclick='logIn()']").click();

    //after login verify the log out is there visisbility

    //the below line is another type of loacting the element
     const logout=await page.locator("//a[@onclick='logOut()']");
     await expect(logout).toBeVisible();

     await page.close();
})


