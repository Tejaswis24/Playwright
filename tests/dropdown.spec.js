import {test, expect} from '@playwright/test'

test('handle dropdown', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //multiple ways we have select option from the dropdowm

    //1st by using label
    await page.locator('#country').selectOption({label:'India'});//we will hash weh the AN is id
    await page.waitForTimeout(5000)

    //by using visible text(text)
    await page.locator('#country').selectOption('India');

    //by passing value AN
    await page.locator('#country').selectOption({value:'uk'});

    //by using index
    await page.locator('#country').selectOption({index:'1'});

    await page.selectOption('#country','Inida');


    //Wt type of assertion we can add

    //to check the number of option approach 1
   const option = await page.locator('#country option')  // it will rturn all the option in thr dropdown
   await expect(option).toHaveCount(10);

   //approach 2 check the no of option in dropdown 
    const options = await page.$$('#country option')   //$$ is used to array format
    console.log(options.length)
    await expect(options.length).toBe(10)

    //to check the presence of value in the dropdown
    const text = await page.locator('#country').textContent()   //text content will return all the text
    await expect (text.includes('India')).toBeTruthy()
    
    /*by using for loop
    const loop = await page.$$('#country option')
    for(const loops of loop)
    {
    console.log(await loops.textContent())
    let value = await option.textContent()
    if (value.includes('France'))
        {
            status = true;
            break
        }
    }
expect(status).toBeTruthy()*/

// the above are all is used when the tag name is select if we dont have select we have to user looping
// select option from the looping statement
const loop = await page.$$('#country option')
    for(const loops of loop)
    {
    console.log(await loops.textContent())
    let value = await option.textContent()
    if (value.includes('France'))
        {
            await page.selectOption('#country', value)
            break
        }
    }
expect(status).toBeTruthy()


})