import {test, expect} from '@playwright/test';


test('Test Forms', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await page.fill("//*[@id='name']", "John Munioz");
    await page.fill("//*[@id='email']", "jfmunoz.ingeniero@gmail.com");
    await page.fill("//*[@id='ageSlider']", '36');
    await page.click("//*[@type='submit']");
    await expect(page.locator("//*[text()='Form submitted!']")).toBeVisible();
    //await page.pause();
});

test('Test Copy', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await expect(page.locator("//h1[text()='Sandbox para Pruebas Automatizadas']")).toBeVisible();
    await expect(page.locator("//h2[text()='Importancia del Testing']")).toBeVisible();
    await expect(page.locator("//p[contains(text(),'El testing es una parte crucial del desarrollo de software')]")).toBeVisible();
    await expect(page.locator("//*[text()='Form submitted!']")).toBeHidden();
    //await page.pause();
});

test('Test Select', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await page.locator("//*[@id='developerRoles']").selectOption("Backend Developer");
    await expect(page.locator("//option[text()='Frontend Developer']")).toBeHidden();
    await expect(page.locator("//option[text()='Fullstack Developer']")).toBeHidden();
    //await page.pause();
});

