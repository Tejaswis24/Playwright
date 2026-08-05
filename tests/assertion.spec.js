const {test, expect}=require('@playwright/test')

test('assertion', async({page})=>
{
    //open the appp
    await page.goto('https://demo.nopcommerce.com/register')


    //to check the page has url
   await  expect(page).toHaveURL('https://demo.nopcommerce.com/register')

   //page have title
   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   //element is visible
 const logoelement=await page.locator('.header-logo')
 await expect(logoelement).toBeVisible()

 //element is enable for disable use tobe disabled()
const searchstorebox=await page.locator('small-searchterms')
await expect(searchstorebox).toBeEnabled()

//to be checked used validate radio.checkbox selected so 1st we need select the checkbox/radio
const male=await  page.locator("#gender-male")
await male.click()
await expect(male).toBeChecked()

//to have text
await expect(await page.locator('.page-title-h1')).toHaveText('register')

//to check the partial text
await expect(await page.locator('.page-title-h1')).toContainText('regist')

//to have value means input elemet having right value or not
const emailinput=await page.locator('#email')
emailinput.fill('test@gmail.com')
await expect(emailinput).toHaveValue('test@gmail.com')

//to have count to check the count in drop down 
const option=await page.locator("select[name='DateOfBirthMonth']option")
await expect(option).toHaveCount(13)

//softassert to execute the next line even though assertion failed we will use this
const options=await page.locator("select[name='DateOfBirthMonth']option")
await expect.soft(option).toHaveCount(13)

//And we have multiple ()in playwright check the playwrightdev document in the chrome

})