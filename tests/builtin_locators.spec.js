/*
page.getbyalttext()----to locate an element usually image, by its text alternative(To check the logo)
page.getbyplaceholder()----to locate an input by placeholder
page.getbyrole()----to locate by explicit and implicit accesbility attributes
page.getbytext()----to locate by test content

these below 3 refer play wright document 
page.getbylabel()----to locate form control by associated label text
page.getbytitle()----by its title attribute
page.getbytestid()----based on data test id attribute
*/

import {test, expect} from '@playwright/test'
test('builtin_locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //to check the logo is present/not
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //get by placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //get by role here button is the role, other like  select, link
    await page.getByRole('button',{type:'submit'}).click()

    //get by text here 27 line is fetching the name and its stored in name variable
   const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible()
})