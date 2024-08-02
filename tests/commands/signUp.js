const { test, expect } = require('@playwright/test');

async function testSignUp(page, user) {
    await page.goto('https://automationexercise.com/login');
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill(user.name);
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(user.email);
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.locator('#uniform-id_gender1').click();
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill(user.password);
    await page.locator('#days').selectOption(user.day);
    await page.locator('#months').selectOption(user.month);
    await page.locator('#years').selectOption(user.year);
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill(user.firstName);
    await page.getByLabel('First name *').press('Tab');
    await page.getByLabel('Last name *').fill(user.lastName);
    await page.getByLabel('Company', { exact: true }).click();
    await page.getByLabel('Company', { exact: true }).fill(user.company);
    await page.getByLabel('Address * (Street address, P.').click();
    await page.getByLabel('Address * (Street address, P.').fill(user.address);
    await page.getByLabel('Country *').selectOption(user.country);
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByLabel('State *').click();
    await page.getByLabel('State *').fill(user.state);
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByLabel('City *').click();
    await page.getByLabel('City *').fill(user.city);
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill(user.zipcode);
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByLabel('Mobile Number *').click();
    await page.getByLabel('Mobile Number *').fill(user.mobileNumber);
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.locator('b')).toContainText('Account Created!');
}

module.exports = {
    testSignUp
}
