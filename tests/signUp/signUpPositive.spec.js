import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Successful `Sign up` flow test', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/register');
  await page.getByPlaceholder('Username').fill(faker.person.firstName());
  await page.getByPlaceholder('Email').fill(faker.internet.email());
  await page.getByPlaceholder('Password').fill(faker.internet.password());
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('Your Feed')).toBeVisible();
});
