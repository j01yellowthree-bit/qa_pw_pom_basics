import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';

test('Successful `Sign in` flow test', async ({ page }) => {
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const email = ''; // TODO add email
  const password = ''; // TODO add password

  await signInPage.open();
  await signInPage.fillEmailField(email);
  await signInPage.fillPasswordField(password);
  await signInPage.clickSignInButton();
  await homePage.assertYourFeedTabIsVisible();
});
