import { test, expect } from '@playwright/test';

test.describe('Sign in negative tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/register');
  });

  test('Assert error message for empty username in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `username:Username must start with a letter, 
    have no spaces, and be 2 - 40 characters.`;

    await page.getByPlaceholder('Email').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('newpass123!');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('list').nth(1)).toContainText(errorMessage);
  });

  test('Assert error message for empty email in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `email:This email does not seem valid.`;

    await page.getByPlaceholder('Username').fill('newuser');
    await page.getByPlaceholder('Password').fill('newpass123!');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('list').nth(1)).toContainText(errorMessage);
  });

  test('Assert error message for empty password in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `password:can't be blank`;

    await page.getByPlaceholder('Username').fill('newuser');
    await page.getByPlaceholder('Email').fill('test@gmail.com');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('list').nth(1)).toContainText(errorMessage);
  });
});
