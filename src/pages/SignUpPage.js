const { expect } = require('@playwright/test');

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', {name:'Sign up'});
    this.errorMessage = page.getByRole('list').nth(1);
    this.yourFeedHeader = page.getByText('Your Feed');
  }
     async open (){
      await this.page.goto('https://conduit.mate.academy/user/register');
     }

     async fillUsernameField(username) {
      await this.usernameField.fill(username);
     }

     async fillEmailField(email) {
      await this.emailField.fill(email);
     }

     async fillPasswordField(password) {
      await this.passwordField.fill(password);
     }

     async clickSignUpButton(){
      await this.signUpButton.click();
     }

      async assertErrorMessageContainsText(messageText) {
      await expect( this.errorMessage).toContainText(messageText);
     }

     async assertYourFeedIsVisible() {
  await expect(this.yourFeedHeader).toBeVisible();
     }
}
