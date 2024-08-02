const { test, expect } = require('@playwright/test');
import { generateUser } from './data/userGenerator';
import { testSignUp } from './commands/signUp';


test('Sign Up Test', async ({ page }) => {
    const user = generateUser();
    await testSignUp(page, user);
});
