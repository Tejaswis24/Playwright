const { test, expect } = require('@playwright/test');

//const--variable,, test and expect is the parameter expect is for assertion, test is a command 

test('Home Page Test',async({page})=>{

//whenever we are taking the () from page we have to add await beside
//async to follow line by line java script is a async programming lang.  the function will return the promise
//await is function wait for the promise means page is loaded

    await page.goto('https://www.demoblaze.com/index.html');

    //to fetch the page title of the tab

    const title=page.title();
    console.log(title);

    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page).toHaveTitle("STORE");
    
    await page.close();

    
})

