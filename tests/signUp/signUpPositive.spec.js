import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../../src/pages/SignUpPage';

test('Successful `Sign up` flow test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  await signUpPage.open();
  await signUpPage.fillUsernameField(faker.person.firstName());
  await signUpPage.fillEmailField(faker.internet.email());
  await signUpPage.fillPasswordField(faker.internet.password());
  await signUpPage.clickSignUpButton();
  
  await signUpPage.assertYourFeedIsVisible();
});